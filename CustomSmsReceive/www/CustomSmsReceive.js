  var exec = require('cordova/exec');
  
  var CustomSmsReceive = function() {};
  
  CustomSmsReceive.COLS = {
          _ID: "_id",
          READ: "read",
          THREAD_ID: "thread_id",
          ADDRESS: "address",
          DATE: "date",
          SUBJECT: "subject",
          BODY: "body"
  };


  /**
   * Check if the device has a possibility to send and receive SMS
   */
  CustomSmsReceive.prototype.isSupported = function(successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'CustomSmsReceive', 'HasSMSPossibility', []);
  }

  /**
   * Check if the device has a possibility to send and receive SMS
   * the successCallback function receives string parameters with
   * the values.
   */
  CustomSmsReceive.prototype.startReception = function(successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'CustomSmsReceive', 'StartReception', []);
  }

  /**
   * Stop the receiving sms.
   */
  CustomSmsReceive.prototype.stopReception = function(successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'CustomSmsReceive', 'StopReception', []);
  }
  
  /**
   * Gets sms messages stored on the device based on your custom criteria.
   * Use the columns names mentioned in CustomSmsReceive.COLS.
   * 
   * @param maxRowsCount The maximum number of rows to fetch. If not needed this can be -1.
   * @param whereClause A string with the WHERE-clause, (w/o the WHERE keyword).
   *  If not needed this can be null.
   * @param whereArgsArray If any '?' is used in the above WHERE-clause then supply the
   * value for that in this array. If not needed this can be null.
   */
  CustomSmsReceive.prototype.getSmsByCustomCriteria = function(maxRowsCount, whereClause, whereArgsArray, orderByClause,
          successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'CustomSmsReceive', 'GetSmsByCustomCriteria', [maxRowsCount, whereClause, whereArgsArray, orderByClause]);
  }
  
  /**
   * Gets all sms stored on the device.
   * 
   * @param maxRowsCount The maximum number of rows to fetch. If not needed this can be -1.
   */
  CustomSmsReceive.prototype.getAllSms = function(maxRowsCount, successCallback,failureCallback) {
    alert("in the plugin");
    return exec(successCallback, failureCallback, 'CustomSmsReceive', 'GetAllSms', [maxRowsCount]);
  }
  
  /**
   * Gets the count of all sms stored on the device.
   */
  CustomSmsReceive.prototype.getAllSmsCount = function(successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'CustomSmsReceive', 'GetAllSmsCount', []);
  }
  
  /**
   * Gets all unread sms stored on the device.
   * 
   * @param maxRowsCount The maximum number of rows to fetch. If not needed this can be -1.
   */
  CustomSmsReceive.prototype.getAllUnreadSms = function(maxRowsCount, successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'CustomSmsReceive', 'GetAllUnreadSms', [maxRowsCount]);
  }
  
  /**
   * Gets the count of all unread sms stored on the device.
   */
  CustomSmsReceive.prototype.getAllUnreadSmsCount = function(successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'CustomSmsReceive', 'GetAllUnreadSmsCount', []);
  }
  
  /**
   * Sets a given stored sms as read on the device. Note you need android.permission.WRITE_SMS permission for this. 
   * 
   * @param smsId The value of _id column of the sms.
   */
  CustomSmsReceive.prototype.setSmsAsRead = function(smsId, successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'CustomSmsReceive', 'SetSmsAsRead', [smsId]);
  }

  var customSmsReceive = new CustomSmsReceive();
  module.exports = customSmsReceive;
