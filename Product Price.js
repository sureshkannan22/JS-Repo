function checkid()
{
    var employeeId=document.getElementById('eid').value;
    var span1=document.getElementById('sp1');
    if(employeeId != ' ')
      {
        span1.innerHTML='Ok'
      }
    else
      {
        span1.innerHTML='Enter a Employee ID';
      }
}
function checkuser()
{
    var employeeName=document.getElementById('eName').value;
    var errorMsg=document.getElementById('sp2');
    var storeData; 
    if(employeeName.length>5)
    {
     storeData='valid';
    }
    else
    {
     storeData='Invalid';
    }
     errorMsg.innerHTML=storeData;
}
function checkEroll()
{
    var employeeRoll=document.getElementById('eRole').value;
    var span3=document.getElementById('sp3');
    if(employeeRoll != ' ')
      {
        span3.textContent='Ok';
      }
    else 
      {
        span3.textContent='Please fill the Employee Role';
      }
}
function calSalary()
{
     var basicPay=parseInt(document.getElementById('basPay').value);
     var hra=document.getElementById('houseRent').value=basicPay*(15/100);
     var da=document.getElementById('dailyAll').value=basicPay*(10/100);
     var pf=document.getElementById('providentFund').value=basicPay*(5/100);
     var hra1=parseInt(hra);
     var da1=parseInt(da);
     var pf1=parseInt(pf);
     var netSalary=document.getElementById('nsalary').value=(basicPay+hra1+da)p;
     var netSalary1=parseInt(netSalary);
     var grossSalary=document.getElementById('gsalary').value=netSalary1-pf1;
}
