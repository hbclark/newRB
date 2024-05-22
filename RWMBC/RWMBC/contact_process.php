<?php

// get posted data into local variables
$EmailAddress = Trim(stripslashes($_POST['EmailAddress'])); // This is the Variable for the EmailAddress passed from the previous forms Text Field EmailAddress
$EmailTo = "INSERT YOUR EMAIL ADDRESS HERE"; // The INSERT YOUR EMAIL ADDRESS HERE needs to be changed to match the email address of the website
$Subject = "Contact from RWMBC's Website"; // This is the subject line of the email
$Name = Trim(stripslashes($_POST['Name']));  // These are the other form fields that have been passed from the contact form to this form processor
$Phone = Trim(stripslashes($_POST['Phone'])); //Trim(stripslashes is used to clean up text from the previous form when a ' is used it becomes \' the Trim cleans up the \
$About = Trim(stripslashes($_POST['About'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

$validationOK=true; //sets the $validationOK variable to TRUE
if (Trim($EmailAddress)=="") $validationOK=false; // If the EmailAddress variable is blank sets the $validationOK variable to FALSE
if (!$validationOK) { // This is what happens if $validationOK become FALSE 
print "<meta http-equiv=\"refresh\" content=\"0;URL=contact_error.html\">"; // This redirects the user to a page contact_error.html if the email address is missing.
exit; //Exits the routine
}


// prepare email body text
$Body = ""; // This line starts the $Body variable.
$Body .= "Name: ";// This line is the start of the Name line
$Body .= $Name; // This follows the Name: from the line before
$Body .= "\n"; // This line creates a line break
$Body .= "They want to know about: "; //This line continues to build the message
$Body .= $About; // the $Body = means that anything that follows is part of the $Body variable up to the ;
$Body .= "\n"; // Unless there is a .= which means to append what follows to that variable.
$Body .= "Their phone number is: ";
$Body .= $About;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailAddress>"); //this line invokes the PHP mail action on the webserver and creates an email using the information contained in the ( )

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contact_success.html\">"; // This redirects the user to a page contact_sucess.html if everything is ok and the email is sent.
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contact_error.html\">"; // This redirects the user to a page contact_error.html if something is wrong and the email isn't sent.
}
?>