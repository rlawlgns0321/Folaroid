package com.folaroid.portfolio.api.controller;

import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

public class ReadmeController {

    public MultiValueMap<String, String> getMDContent (String urlString) {
        URL url; // The URL to read
        HttpURLConnection conn; // The actual connection to the web page
        BufferedReader rd; // Used to read results from the web page
        String line; // An individual line of the web page HTML
        MultiValueMap<String, String> res = new LinkedMultiValueMap<>(); // A long string containing all the HTML
        try {
            url = new URL(urlString);
            conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            while ((line = rd.readLine()) != null) {
                if (!isEmptyLine(line)) {
                    if (line.contains("|")) { //table parsing
                       int barNumber = 0;
                       for (int i = 0 ; i < line.length() ; i++) {
                           if (line.charAt(i) == '|')
                               barNumber++;
                       }
                       String headerCheckLine = rd.readLine();
                       if (headerCheckLine != null && headerCheckLine.contains("|")) {
                           boolean isTable = true;
                           boolean passDash = false;
                           char currentChar = headerCheckLine.charAt(0);
                           char nextChar;

                           if (currentChar != '|' && currentChar != '-')
                               isTable = false;
                           else {
                               for (int i = 0; i < headerCheckLine.length() - 1; i++) {
                                   currentChar = headerCheckLine.charAt(i);
                                   nextChar = headerCheckLine.charAt(i + 1);
                                   if (nextChar != '|' && nextChar != ':' && nextChar != '-' && nextChar != ' ') {
                                       isTable = false;
                                       break;
                                   }
                                   if (currentChar == '|') {
                                       if (passDash)
                                           passDash = false;
                                       else {
                                            isTable = false;
                                            break;
                                       }
                                   }
                                   else if (currentChar == ':') {
                                       if (nextChar == '-' && passDash) {
                                           isTable = false;
                                           break;
                                       }
                                   }
                                   else if (currentChar == ' ') {
                                       if (passDash && nextChar == '-') {
                                           isTable = false;
                                           break;
                                       }
                                   }
                                   else if (currentChar == '-') {
                                        if (!passDash)
                                            passDash = true;

                                   }
                                   else {
                                       isTable = false;
                                       break;
                                   }
                               }
                           }

                           if (!isTable) {
                               res.add("md", line);
                               line = headerCheckLine;
                           }
                           else {
                               line += "\n" + headerCheckLine;
                               String tableLine;
                               while ((tableLine = rd.readLine()) != null && isEmptyLine(tableLine))
                                   line += "\n" + tableLine;
                               res.add("md", line);
                               line = tableLine;
                           }
                       }
                    }
                    if (line.length() == 0)
                        continue;
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
                        res.add("image", line);
                        continue;
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

                    else if (line.charAt(0) == '>') { //quotes parsing
                        String quoteLine;
                        while ((quoteLine = rd.readLine()) != null && quoteLine.charAt(0) == '>')
                            line += "\n" + quoteLine;
                    }

                    else if ((line.charAt(0) == '-' //unordered list parsing
                    || line.charAt(0) == '*'
                    || line.charAt(0) == '+') && line.charAt(1) == ' ') {
                        String unorderedListLine;
                        while ((unorderedListLine = rd.readLine()) != null && !isEmptyLine(unorderedListLine)) {
                            line += "\n" + unorderedListLine;
                        }
                    }

                    else if (line.charAt(0) >= '0' && line.charAt(0) <= '9') { //ordered list parsing
                        for (int i = 1 ; i < line.length() - 1 ; i++) {

                            if (line.charAt(i) == '.' && line.charAt(i + 1) == ' ') {
                                String orderedListLine;
                                while ((orderedListLine = rd.readLine()) != null && !isEmptyLine(orderedListLine)) {
                                    line += "\n" + orderedListLine;
                                }
                                break;
                            }
                            else if (line.charAt(i) < '0' || line.charAt(i) > '9')
                                break;
                        }
                    }
                    System.out.println(line);
                    res.add("md", line);
                }
            }
            rd.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }

    public boolean isEmptyLine(String a) {
        int emptyNum = 0;
        for (int i = 0 ; i < a.length() ; i++) {
            if (a.charAt(i) == ' ' || a.charAt(i) == '\t')
                emptyNum++;
        }
        if (emptyNum == a.length())
            return true;
        else
            return false;
    }
}
