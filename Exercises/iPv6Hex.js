var ipHexa = (ip) => {
    var hexString = "", tempInt = 0;
    for(var i = 0; i < ip.length; i++){
        if(parseInt(ip.charAt(i),16)){
            tempInt += parseInt(ip.charAt(i),16);
        }else{
            hexString += tempInt.toString();
            tempInt = 0;
        }
    }
    return hexString;
};

input1 = "1234:5678:9ABC:D00F:1111:2222:3333:4445";
input2="5454:FBFD:9ABC:AAAA:FFFF:2222:FBDE:0101";
input3="0000:0000:0000:0000:0000:0000:0000:0000";
input4="FFFF:FFFF:BBBB:CCCC:1212:AABC:0000:1111";
input5="ACDD-0101-9ABC-AAAA-FFFF-2222-FBDE-ACCC";
input6="5454rFBFDr9ABCrAA0ArFAFFr2222rFBDEr0101";
input7="F234#5678#9ABC#D00F#1111#2222#3333#4485";


