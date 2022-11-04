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
                    /*if (line.contains("|")) { //table parsing
                       int barNumber = 0;
                       for (int i = 0 ; i < line.length() ; i++) {
                           if (line.charAt(i) == '|')
                               barNumber++;
                       }
                       String headerCheckLine = rd.readLine();
                       if (headerCheckLine != null && headerCheckLine.contains("|")) {
                           String[] headerCheckSplitLine = headerCheckLine.split("|");
                           System.out.println("Table col number is " + headerCheckSplitLine.length);
                           if (headerCheckSplitLine.length >= barNumber - 1 && headerCheckSplitLine.length <= barNumber + 1) {
                               for (int i = 0 ; i < headerCheckSplitLine.length ; i++) {
                                   headerCheckSplitLine[i].replace(" ", "");
                                   String check = new String(new char[headerCheckSplitLine[i].length()]).replace('\0', '-');
                                   String checkLeft = ":" + check.substring(1);
                                   String checkRight = check.substring(1) + ":";
                                   String checkMid = ":" + check.substring(2) + ":";
                                   if (!headerCheckSplitLine[i].equals(check) && !headerCheckSplitLine[i].equals(checkLeft)
                                           && !headerCheckSplitLine[i].equals(checkRight)
                                           && !headerCheckSplitLine[i].equals(checkMid))
                                       break;
                               }
                           }
                       }
                    }*/
                    if (line.charAt(0) == '!' && line.charAt(1) == '[') { //link, image parsing
                        int imgOpenIdx = 0;
                        int imgCloseIdx = 0;
                        while (imgOpenIdx < line.length() - 1 && !(line.charAt(imgOpenIdx) == ']' && line.charAt(imgOpenIdx + 1) == '('))
                            imgOpenIdx++;
                        if (imgOpenIdx != line.length() - 1) {
                            imgCloseIdx = imgOpenIdx;
                            while (imgCloseIdx < line.length() && line.charAt(imgCloseIdx) != ')')
                                imgCloseIdx++;
                            if (imgCloseIdx != line.length())
                                line = line.substring(imgOpenIdx + 2, imgCloseIdx);
                        }
                        //continue;
                    }
                    else if (line.length() > 2   //header parsing
                        && (line.charAt(0) == '='
                        || line.charAt(0) == '-')
                        && line.charAt(0) == line.charAt(1)
                        && line.charAt(1) == line.charAt(2))
                        continue;

                    else if (line.length() > 2   //codeblock parsing
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
