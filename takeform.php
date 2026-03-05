<html>
<link rel="stylesheet" type="text/css" href="css/format.css">
<style>
    body {
        background-image: url('img/UI/BG.svg');
        background-size: 100%;
        background-color: 545454;
    }

    div.hoverimage img {
        height: 200px;
        width: 200px;
        -webkit-transition: height 0.5s, width 0.5s;
        -moz-transition: height 0.5s, width 0.5s;
        transition: height 0.5s, width 0.5s;
    }

    div.hoverimage img:hover {
        height: 300px;
        width: 380px;
    }

    input[type="text"] {
        display: block;
        margin: 0;
        width: 100%;
        font-family: arial;
        font-size: 18px;
       	font-style:bold;
        appearance: none;
        box-shadow: none;
        border-radius: none;
    }

        input[type="submit"] {
        display: block;
        margin: 0px 0px 0px 25%;
        width: 25%;
        font-family: arial;
		font:25px arial black;
		font-style:bold;
        appearance: none;
        box-shadow: none;
        border-radius: none;
        color: 545454;
    }
</style>
<head>
    <link rel="icon" type="image/png" href="favcion.ico">
    <script src="https://use.typekit.net/uld7pgs.js"></script>
    <script>try { Typekit.load({ async: true }); } catch (e) { }</script>
</head>
<body>
    <div class="parallax">
        <div class="parallax__layer parallax__layer--back">
            <div class="title"><img src="img/UI/BGtug.png" align="right"></div>
        </div>
        <div class="parallax__layer parallax__layer--base">
            <div id="main" class="m-scene">
                <table align="center">
                    <td> <h1> AUGUST LOOLAM </h1> <h5>Character TD</h5></td>
                </table>
                <table align="center">
                    <tr width ="auto" align="center">
                        <td width="auto"> <t2> <a class="menu" href="index.html"> ABOUT </a> </t2> </td>
                        <td> <t2> | </t2> </td>
                        <td> <t2> <a class="menu" href="reel.html"> REEL </a> </t2> </td>
                        <td> <t2> | </t2> </td>
                        <td> <t2> <a class="menu" href="resume.html"> RESUME </a> </t2> </td>
                        <td> <t2> | </t2> </td>
                        <td> <t2> <a class="menu" href="fnat.html"> FINE ART </a> </t2> </td>
                        <td> <t2> | </t2> </td>
                        <td> <t2> <a class="menu" href="rigging.html"> RIGGING </a> </t2> </td>
                        <td> <t2> | </t2> </td>
                        <td>
                            <t2>
                                <div class="dropdown">
                                    <button class="dropbtn">TOOLS</button>
                                    <div class="dropdown-content">
                                        <a href="IFM.html">IFM</a>
                                        <a href="revtools.html">REVTOOLS</a>
                                    </div>
                            </t2>
                        </td>
                        <td> <t2> | </t2> </td>
                        <td> <t2> <a class="menu" href="links.html"> CONTACT </a> </t2> </td>
                    </trwidth>
                </table>
                <div class="scene-element scene-element--fadeinright">
                    <div class="squares" float="center" width="75%">
                        <div align="center">
<?php
  // Change this to YOUR address
  $recipient = 'aug550@gmail.com';
  $email = $_POST['email'];
  $realName = $_POST['realname'];
  $subject = $_POST['subject'];
  $body = $_POST['body'];
  # We'll make a list of error messages in an array
  $messages = array();
# Allow only reasonable email addresses
if (!preg_match("/^[\w\+\-.~]+\@[\-\w\.\!]+$/", $email)) {
$messages[] = "That is not a valid email address. :c";
}
# Allow only reasonable real names
if (!preg_match("/^[\w\ \+\-\'\"]+$/", $realName)) {
$messages[] = "The name field must contain only " .
"alphabetical characters, numbers, spaces, and " .
"reasonable punctuation.";
}
# CAREFUL: don't allow hackers to sneak line breaks and additional
# headers into the message and trick us into spamming for them!
$subject = preg_replace('/\s+/', ' ', $subject);
# Make sure the subject isn't blank afterwards!
if (preg_match('/^\s*$/', $subject)) {
$messages[] = "Please specify a subject for your message.";
}

$body = $_POST['body'];
# Make sure the message has a body
if (preg_match('/^\s*$/', $body)) {
$messages[] = "Your message was blank. Did you mean to say " .
"something? :s"; 
}
  if (count($messages)) {
    # There were problems, so tell the user and
    # don't send the message yet
    foreach ($messages as $message) {
      echo("<p>$message</p>\n");
    }
    echo("<p>Click the back button and correct the problems. " .
      "Then click Send Your Message again.</p>");
  } else {
    # Send the email - we're done
mail($recipient,
      $subject,
      $body,
      "From: $realName <$email>\r\n" .
      "Reply-To: $realName <$email>\r\n"); 
    echo("<p>Sent! :3</p>\n");
  }
?>
                        </div>
                    </div>
                </div>
                <table width="50%" align="center">
                    <tr align="center">
                        <td> <a href="index.html">ABOUT</a> </td>
                        <td> | </td>
                        <td> <a href="reel.html">REEL</a> </td>
                        <td> | </td>
                        <td> <a href="resume.html">RESUME</a> </td>
                        <td> | </td>
                        <td> <a href="fnat.html">FINE ART</a> </td>
                        <td> | </td>
                        <td> <a href="rigging.html">RIGGING</a> </td>
                        <td> | </td>
                        <td> <a href="tools.html">TOOLS</a> </td>
                        <td> | </td>
                        <td> <a href="links.html">CONTACT</a> </td>
                    </tr>
                </table>
				        <p align=right>
            <t4>
                516-676-3456  &nbsp; &nbsp;
                <br>
                aug550@gmail.com  &nbsp; &nbsp; &nbsp;
            </t4>
        </p><br>
            </div>
        </div>
        <br><br>
</body>
</html>

<!--JavaScripts-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="js/prefixfree.min.js"></script>
<script src="js/jquery.smoothState.js"></script>
<script src="js/functions.js"></script>