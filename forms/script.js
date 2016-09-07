/**
 * Created by JENN on 9/6/2016.
 */


// get id from html and use them
var $ = function(id)
{
    return document.getElementById(id);
}



var calculate_cost = function()
{
    // we have to parse - or change - the values to floats. Form values are strings by default.

    var length1 = parseFloat($("frontyardlg").value);
    var width1 = parseFloat($("frontyardwd").value);

    var length2 = parseFloat($("backyardlg").value);
    var width2 = parseFloat($("backyardwd").value);

    var length3 = parseFloat($("ltsideyardlg").value);
    var width3 = parseFloat($("ltsideyardwd").value);

    var length4 = parseFloat($("rtsideyardlg").value);
    var width4 = parseFloat($("rtsideyardwd").value);

    if(isNaN(length1) || isNaN(width1) ||isNaN(length2) || isNaN(width2) ||isNaN(length3) || isNaN(width3) ||isNaN(length4) || isNaN(width4))
    {
        alert("You have an invalid value. Correct and click submit")
    }
    else
    {
        var total = ((length1 * width1) + (length2 * width2) +(length3 * width3) + (length4 * width4)) *.1 ;//10 cents per square foot
        total = total.toFixed(2);
        $("totalcost").value= "$ " + total;
    }
}
window.onload = function()
{
    $("submit").onclick = calculate_cost;

}