function checkPid()
{
    var productId =document.getElementById('pid').value;
    var span1=document.getElementById('sp1');
}
function checkProduct()
{
    var productName=document.getElementById('pname').value;
}
function calBill()
{
    var Rate=parseInt(document.getElementById('rate').value);
    var Qty=parseInt(document.getElementById('qty').value);
    var Amount=document.getElementById('amount').value=Rate*Qty;
    var Discount=document.getElementById('disc').value=Amount*(15/100);
    var CGST=document.getElementById('gst').value=Amount*(6/100);
    var SGST=document.getElementById('cst').value=Amount*(6/100);
    var Amount1=parseInt(Amount);
    var Disc1=parseInt(Discount);
    var CGST1=parseInt(CGST);
    var SGST1=parseInt(SGST);
    var netPrice=document.getElementById('nsalary').value=(Amount1-Disc1+CGST1+SGST1);
    var netPrice1=parseInt(netPrice);
    document.getElementById('tbodyid').innerHTML='<tr><td>'+Rate+'</td><td>'+Qty+'</td><td>'+Amount1+'</td><td>'+Disc1+'</td><td>'+CGST1+'</td><td>'+SGST1+'</td></td>'+Total+'</td></tr>'
}