var titleName =  document.getElementById("title_container");
var contentText = document.getElementById("text_content");

titleName.value = "";
contentText.value = "";
function downlaodFile() {
    if(titleName.value === "" || contentText.value === "")
    window.alert("Input your file name");
    else {
        var content = contentText.value;
        var text_content = document.createElement("a");
        text_content.download = titleName.value + ".txt";
        var new_Text = new Blob([content], {
            type: "text/plain"
        });
        text_content.href = window.URL.createObjectURL(new_Text);
        text_content.click();
    }
}function ContentStyle(propertyName)
{
    switch(propertyName)
    {
        case "b":
            if( contentText.style.fontWeight === "bold")
         contentText.style.fontWeight = "normal";
        else
         contentText.style.fontWeight = "bold";
        break;
        case "i":
            if( contentText.style.fontStyle === "italic")
         contentText.style.fontStyle = "normal";
        else
         contentText.style.fontStyle = "italic";
        break;
        case "n":
         contentText.style.fontWeight = "normal";
         contentText.style.fontStyle = "normal";
         contentText.style.textDecoration = "none";
        break;
        case "u":
if( contentText.style.textDecoration === "underline")
         contentText.style.textDecoration = "none";
        else
         contentText.style.textDecoration = "underline"
        break;

    }
    
    
}