package com.folaroid.portfolio.api.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

public class ReadmeController {

    public ArrayList<String> getMDContent (String urlString) {
        URL url; // The URL to read
        HttpURLConnection conn; // The actual connection to the web page
        BufferedReader rd; // Used to read results from the web page
        String line; // An individual line of the web page HTML
        ArrayList<String> res = new ArrayList<>(); // A long string containing all the HTML
        try {
            url = new URL(urlString);
            conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            while ((line = rd.readLine()) != null) {

                if (line.length() != 0) {
                    if (line.length() > 2   //header parsing
                        && (line.charAt(0) == '='
                        || line.charAt(0) == '-')
                        && line.charAt(0) == line.charAt(1)
                        && line.charAt(1) == line.charAt(2))
                        continue;

                    if (line.length() > 2   //codeblock parsing
                        && line.charAt(0) == '`'
                        && line.charAt(0) == line.charAt(1)
                        && line.charAt(1) == line.charAt(2)) {
                        String codeLine;
                        while ((codeLine = rd.readLine()) != null) {
                            line += "\n" + codeLine;
                            if (codeLine.length() > 2 && codeLine.substring(codeLine.length() - 3).equals("```"))
                                break;
                        }
                    }
                    res.add(line);
                }
            }
            rd.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }

}
