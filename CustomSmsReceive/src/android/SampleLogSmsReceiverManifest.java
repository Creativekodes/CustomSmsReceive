package cordova.plugin.custom.sms.receive;

import org.json.JSONException;
import org.json.JSONObject;

import android.util.Log;


public class SampleLogSmsReceiverManifest extends SmsReceiverManifest {

    @Override
    public void resultJsonObject(JSONObject json) {
        try {
            Log.i("TAG", "Received new SMS - " + json.toString(4));
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

}
