package com.sjtu.se.hospital.utils;

import lombok.Getter;
import lombok.Setter;
import net.sf.json.JSONObject;

@Getter
@Setter
public class Msg {
    private boolean success;
    private String msg;
    private JSONObject data;

    Msg(boolean status, String extra, JSONObject data){
        this.success = status;
        this.msg = extra;
        this.data = data;
    }

    Msg(boolean status, String extra){
        this.success = status;
        this.msg = extra;
        this.data = null;
    }

}
