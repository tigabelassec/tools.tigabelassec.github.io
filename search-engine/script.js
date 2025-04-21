function googleSearch(type) {
  var targetDomain = document.getElementById("target").value;
  var errorMessageElement = document.getElementById("error-message");
  errorMessageElement.classList.add("hidden");
  errorMessageElement.innerText = "";

  if (!targetDomain) {
    errorMessageElement.classList.remove("hidden");
    errorMessageElement.innerText = "Please enter a target domain.";
    return;
  }

  var searchQuery = "site:" + targetDomain;

  switch (type) {
    case 1:
      searchQuery += " intitle:index.of";
      break;
    case 2:
      searchQuery +=
        " ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini";
      break;
    case 3:
      searchQuery += " ext:sql | ext:dbf | ext:mdb";
      break;
    case 4:
      searchQuery += " ext:log";
      break;
    case 5:
      searchQuery += " ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup";
      break;
    case 6:
      searchQuery += " inurl:login";
      break;
    case 7:
      searchQuery +=
        ' intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"';
      break;
    case 8:
      searchQuery +=
        " ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv";
      break;
    case 9:
      searchQuery += ' ext:php intitle:phpinfo "published by the PHP Group"';
      break;
    case 10:
      searchQuery +=
        " inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download";
      break;
    case 11:
      searchQuery +=
        " inurl:shell | inurl:backdoor | inurl:wso | inurl:cmd | shadow | passwd | boot.ini | inurl:backdoor";
      break;
    case 12:
      searchQuery +=
        " inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config";
      break;
    case 13:
      searchQuery +=
        " inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http";
      break;
    case 14:
      searchQuery += " ext:action | ext:struts | ext:do";
      break;
    case 15:
      var site = "site:pastebin.com " + targetDomain;
      var url = "https://www.google.com/search?q=" + encodeURIComponent(site);
      window.open(url, "_blank");
      return;
    case 16:
      var site = "site:linkedin.com employees " + targetDomain;
      var url = "https://www.google.com/search?q=" + encodeURIComponent(site);
      window.open(url, "_blank");
      return;
    case 17:
      var site =
        'inurl:"/phpinfo.php" | inurl:".htaccess" | inurl:"/.git" ' +
        targetDomain +
        " -github";
      var url = "https://www.google.com/search?q=" + encodeURIComponent(site);
      window.open(url, "_blank");
      return;
    case 18:
      var site = "site:*." + targetDomain;
      var url = "https://www.google.com/search?q=" + encodeURIComponent(site);
      window.open(url, "_blank");
      return;
    case 19:
      var site = "site:*.*." + targetDomain;
      var url = "https://www.google.com/search?q=" + encodeURIComponent(site);
      window.open(url, "_blank");
      return;
    case 20:
      var site = "inurl:wp-content | inurl:wp-includes " + targetDomain;
      var url = "https://www.google.com/search?q=" + encodeURIComponent(site);
      window.open(url, "_blank");
      return;
    case 21:
      var site = '"*.' + targetDomain + '"';
      var url =
        "https://github.com/search?q=" +
        encodeURIComponent(site) +
        "&type=host";
      window.open(url, "_blank");
      return;
    case 22:
      var url = "http://" + targetDomain + "/crossdomain.xml";
      window.open(url, "_blank");
      return;
    case 23:
      var url = "http://threatcrowd.org/domain.php?domain=" + targetDomain;
      window.open(url, "_blank");
      return;
    case 24:
      var site = "+inurl:" + targetDomain + " +ext:swf";
      var url = "https://www.google.com/search?q=" + encodeURIComponent(site);
      window.open(url, "_blank");
      return;
    case 25:
      var site = "site:" + targetDomain + " mime:swf";
      var url = "https://yandex.com/search/?text=" + encodeURIComponent(site);
      window.open(url, "_blank");
      return;
    case 26:
      var site = targetDomain;
      var url =
        "https://web.archive.org/cdx/search?url=" +
        encodeURIComponent(site) +
        "/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=urlkey:.*swf&limit=100000";
      window.open(url, "_blank");
      return;
    case 27:
      var site = targetDomain;
      var url =
        "https://web.archive.org/cdx/search?url=" +
        encodeURIComponent(site) +
        "/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=mimetype:application/x-shockwave-flash&limit=100000";
      window.open(url, "_blank");
      return;
    case 28:
      var site = "." + targetDomain;
      var url =
        "https://web.archive.org/web/*/(." + encodeURIComponent(site) + ")";
      window.open(url, "_blank");
      return;
    case 29:
      var site = targetDomain;
      var url =
        "https://web.archive.org/web/*/" + encodeURIComponent(site) + "/*";
      window.open(url, "_blank");
      return;
    case 30:
      var url = "https://crt.sh/?q=%25." + targetDomain;
      window.open(url, "_blank");
      return;
    case 31:
      var site = targetDomain;
      var url =
        "https://www.openbugbounty.org/search/?search=" +
        encodeURIComponent(site) +
        "&type=host";
      window.open(url, "_blank");
      return;
    case 32:
      var site = targetDomain;
      var url =
        "https://www.reddit.com/search/?q=" +
        encodeURIComponent(site) +
        "&source=recent";
      window.open(url, "_blank");
      return;
    case 33:
      var site =
        "+inurl:" +
        targetDomain +
        " +ext:wp- | +inurl:" +
        targetDomain +
        " +ext:wp-content";
      var url =
        "http://wwwb-dedup.us.archive.org:8083/cdx/search?url=" +
        encodeURIComponent(site) +
        "/&matchType=domain&collapse=digest&output=text&fl=original,timestamp&filter=urlkey:.*wp[-].*&limit=1000000";
      window.open(url, "_blank");
      return;
    case 34:
      var url = "https://censys.io/ipv4?q=" + targetDomain;
      window.open(url, "_blank");
      return;
    case 35:
      var url = "https://censys.io/domain?q=" + targetDomain;
      window.open(url, "_blank");
      return;
    case 36:
      var url = "https://censys.io/certificates?q=" + targetDomain;
      window.open(url, "_blank");
      return;
    case 37:
      var url = "https://www.shodan.io/search?query=" + targetDomain;
      window.open(url, "_blank");
      return;
    case 38:
      searchQuery += ' inurl:"/geoserver/ows?service=wfs"';
      break;
    case 39:
      searchQuery +=
        ' intext:"ArcGIS REST Services Directory" intitle:"Folder: /"';
      break;
    case 40:
      searchQuery += " inurl:/wp-content/uploads/wpo_wcpdf";
      break;
    case 41:
      searchQuery += ' intitle:"index of "main.yml"';
      break;
    case 42:
      searchQuery += " inurl:/admin.aspx";
      break;
    case 43:
      searchQuery += " inurl:/wp-content/uploads/wpo_wcpdf";
      break;
    case 44:
      searchQuery += " inurl:uploadimage.php";
      break;
    case 45:
      searchQuery += " inurl:*/wp-content/plugins/contact-form-7/";
      break;
    case 46:
      searchQuery += " intitle:index.of conf.php";
      break;
    case 47:
      searchQuery += ' intitle:"Sharing API Info"';
      break;
    case 48:
      searchQuery += ' intitle:"Index of" intext:"config"';
      break;
    case 49:
      searchQuery += " inurl:graphtemp.php";
      break;
    case 50:
      searchQuery += " inurl:cf.log";
      break;
    case 51:
      searchQuery += ' inurl:"cvs"';
      break;
    case 52:
      searchQuery += " inurl:/.env";
      break;
    case 53:
      searchQuery += ' inurl:"Robo 3T"';
      break;
    case 54:
      searchQuery += ' inurl:"/git/HEAD"';
      break;
    case 55:
      searchQuery += " inurl:/log.txt";
      break;
    case 56:
      searchQuery += ' intitle:"phpMyAdmin"';
      break;
    case 57:
      searchQuery += ' inurl:"/tools/curl"';
      break;
    case 58:
      searchQuery += " inurl:admin.php";
      break;
    case 59:
      searchQuery += " inurl:/security.txt";
      break;
    case 60:
      searchQuery += " inurl:/login.php";
      break;
  }

  var url =
    "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
  window.open(url, "_blank");
}
