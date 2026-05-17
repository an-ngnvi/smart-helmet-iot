function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1"); // Thay "Sheet1" bằng tên sheet của bạn

  var data = JSON.parse(e.postData.contents);

  var now = Utilities.formatDate(new Date(), "GMT+7", "yyyy-MM-dd HH:mm:ss"); // Định dạng thời gian Việt Nam
  var temp = data.temp;
  var humi = data.humi;
  var dust = data.dust;

  // Kiểm tra xem sheet có trống không (chỉ có tiêu đề mặc định)
  if (sheet.getLastRow() === 1) {
    sheet.appendRow(["Thời gian", "Nhiệt độ (°C)", "Độ ẩm (%)", "Bụi (ug/m3)"]); // Thêm tiêu đề
  }

  // Ghi giá trị vào sheet, ép kiểu thành chuỗi để không bị nhận diện là thời gian
  sheet.appendRow([("'" + now), temp, humi, dust]);

  return ContentService.createTextOutput("OK");
}

//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData() {
  var ws=SpreadsheetApp.getActiveSpreadsheet();
  var ss=ws.getActiveSheet(); 
  var values = ss.getDataRange().getValues();
  values.shift(); 
  return values;
}

// GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY, INCLUDING AVERAGE PER DAY
function getDataAvg() {
  var ws = SpreadsheetApp.getActiveSpreadsheet();
  var ss = ws.getActiveSheet(); 
  var values = ss.getDataRange().getValues();
  values.shift(); // Loại bỏ tiêu đề cột

  // Tạo một đối tượng để lưu trữ tổng giá trị và số lượng cho mỗi ngày
  var dailyData = {};
  
  // Duyệt qua các dòng dữ liệu
  for (var i = 0; i < values.length; i++) {
    var date = values[i][0].split(" ")[0]; // Lấy ngày từ ô thời gian (lấy phần ngày của chuỗi thời gian)
    var temp = parseFloat(values[i][1]);
    var humi = parseFloat(values[i][2]);
    var dust = parseFloat(values[i][3]);

    if (!dailyData[date]) {
      dailyData[date] = { temp: 0, humi: 0, dust: 0, count: 0 };
    }

    // Cộng dồn các giá trị và tăng số lượng ngày đó
    dailyData[date].temp += temp;
    dailyData[date].humi += humi;
    dailyData[date].dust += dust;
    dailyData[date].count += 1;
  }

  // Tạo mảng dữ liệu với giá trị trung bình cho mỗi ngày
  var result = [];
  for (var date in dailyData) {
    var avgTemp = dailyData[date].temp / dailyData[date].count;
    var avgHumi = dailyData[date].humi / dailyData[date].count;
    var avgDust = dailyData[date].dust / dailyData[date].count;
    
    result.push([date, avgTemp.toFixed(1), avgHumi.toFixed(1), avgDust.toFixed(1)]);
  }

  return result;
}


function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
