/**
 * Tempel ke Google Apps Script (bersama handler backup yang sudah ada).
 * Deploy sebagai Web App: Execute as Me, Who has access: Anyone.
 */
function doPost(e) {
  var payload = {};
  try {
    payload = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonOut({ status: "error", message: String(err) });
  }

  var folder = DriveApp.getRootFolder();
  var recapFile = getOrCreateFile_(folder, "adzkiya_recap_backup.json", "[]");
  var resFile = getOrCreateFile_(folder, "adzkiya_reservations.json", "[]");

  if (payload.action === "backup") {
    recapFile.setContent(JSON.stringify(payload.data || []));
    return jsonOut({ status: "success" });
  }
  if (payload.action === "restore") {
    return jsonOut({ status: "success", data: recapFile.getBlob().getDataAsString() });
  }
  if (payload.action === "reservation_save") {
    resFile.setContent(JSON.stringify(payload.data || []));
    return jsonOut({ status: "success" });
  }
  if (payload.action === "reservation_list") {
    return jsonOut({ status: "success", data: JSON.parse(resFile.getBlob().getDataAsString() || "[]") });
  }
  return jsonOut({ status: "error", message: "Unknown action" });
}

function doGet(e) {
  e = e || { parameter: {} };
  if (e.parameter.action === "restore") {
    return doPost({ postData: { contents: JSON.stringify({ action: "restore" }) } });
  }
  if (e.parameter.action === "reservation_list") {
    return doPost({ postData: { contents: JSON.stringify({ action: "reservation_list" }) } });
  }
  return jsonOut({ status: "ok" });
}

function getOrCreateFile_(folder, name, initial) {
  var it = folder.getFilesByName(name);
  if (it.hasNext()) return it.next();
  return folder.createFile(name, initial, MimeType.PLAIN_TEXT);
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
