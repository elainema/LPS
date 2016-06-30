var flag = false;
function checkbadwords(fieldid){
	 var reBadWords = /ahole|anus|ash0le|ash0les|asholes|ass|Ass Monkey|Assface|assh0le|assh0lez|asshole|assholes|assholz|asswipe|azzhole|bassterds|bastard|bastards|bastardz|basterds|basterdz|Biatch|bitch|bitches|Blow Job|boffing|butthole|buttwipe|c0ck|c0cks|c0k|Carpet Muncher|cawk|cawks|Clit|cnts|cntz|cock|cockhead|cock-head|cocks|CockSucker|cock-sucker|crap|cum|cunt|cunts|cuntz|dick|dild0|dild0s|dildo|dildos|dilld0|dilld0s|dominatricks|dominatrics|dominatrix|dyke|enema|f u c k|f u c k e r|fag|fag1t|faget|fagg1t|faggit|faggot|fagit|fags|fagz|faig|faigs|fart|flipping the bird|fuck|fucker|fuckin|fucking|fucks|Fudge Packer|fuk|Fukah|Fuken|fuker|Fukin|Fukk|Fukkah|Fukken|Fukker|Fukkin|g00k|gay|gayboy|gaygirl|gays|gayz|God-damned|h00r|h0ar|h0re|hells|hoar|hoor|hoore|jackoff|jap|japs|jerk-off|jisim|jiss|jizm|jizz|knob|knobs|knobz|kunt|kunts|kuntz|Lesbian|Lezzian|Lipshits|Lipshitz|masochist|masokist|massterbait|masstrbait|masstrbate|masterbaiter|masterbate|masterbates|Motha Fucker|Motha Fuker|Motha Fukkah|Motha Fukker|Mother Fucker|Mother Fukah|Mother Fuker|Mother Fukkah|Mother Fukker|mother-fucker|Mutha Fucker|Mutha Fukah|Mutha Fuker|Mutha Fukkah|Mutha Fukker|n1gr|nastt|nigger;|nigur;|niiger;|niigr;|orafis|orgasim;|orgasm|orgasum|oriface|orifice|orifiss|packi|packie|packy|paki|pakie|paky|pecker|peeenus|peeenusss|peenus|peinus|pen1s|penas|penis|penis-breath|penus|penuus|Phuc|Phuck|Phuk|Phuker|Phukker|polac|polack|polak|Poonani|pr1c|pr1ck|pr1k|pusse|pussee|pussy|puuke|puuker|queer|queers|queerz|qweers|qweerz|qweir|recktum|rectum|retard|sadist|scank|schlong|screwing|semen|sex|sexy|Sh!t|sh1t|sh1ter|sh1ts|sh1tter|sh1tz|shit|shits|shitter|Shitty|Shity|shitz|Shyt|Shyte|Shytty|Shyty|skanck|skank|skankee|skankey|skanks|Skanky|slut|sluts|Slutty|slutz|son-of-a-bitch|tit|turd|va1jina|vag1na|vagiina|vagina|vaj1na|vajina|vullva|vulva|w0p|wh00r|wh0re|whore|xrated|xxx|b!+ch|bitch|blowjob|clit|arschloch|fuck|shit|ass|asshole|b!tch|b17ch|b1tch|bastard|bi+ch|boiolas|buceta|c0ck|cawk|chink|cipa|clits|cock|cum|cunt|dildo|dirsa|ejakulate|fatass|fcuk|fuk|fux0r|hoer|hore|jism|kawk|l3itch|l3i+ch|lesbian|masturbate|masterbat|masterbat3|motherfucker|s.o.b.|mofo|nazi|nigga|nigger|nutsack|phuck|pimpis|pusse|pussy|scrotum|sh!t|shemale|shi+|sh!+|slut|smut|teets|tits|boobs|b00bs|teez|testical|testicle|titt|w00se|jackoff|wank|whoar|whore|damn|dyke|fuck|shit|@$$|amcik|andskota|arse|assrammer|ayir|bi7ch|bitch|bollock|breasts|butt-pirate|cabron|cazzo|chraa|chuj|Cock|cunt|d4mn|daygo|dego|dick|dike|dupa|dziwka|ejackulate|Ekrem|Ekto|enculer|faen|fag|fanculo|fanny|feces|feg|Felcher|ficken|fitt|Flikker|foreskin|Fotze|Fu|fuk|futkretzn|gay|gook|guiena|h0r|h4x0r|hell|helvete|hoer|honkey|Huevon|hui|injun|jizz|kanker|kike|klootzak|kraut|knulle|kuk|kuksuger|Kurac|kurwa|kusi|kyrpa|lesbo|mamhoon|masturbat|merd|mibun|monkleigh|mouliewop|muie|mulkku|muschi|nazis|nepesaurio|nigger|orospu|paska|perse|picka|pierdol|pillu|pimmel|piss|pizda|poontsee|poop|porn|p0rn|pr0n|preteen|pula|pule|puta|puto|qahbeh|queef|rautenberg|schaffer|scheiss|schlampe|schmuck|screw|sh!t|sharmuta|sharmute|shipal|shiz|skribz|skurwysyn|sphencter|spic|spierdalaj|splooge|suka|b00b|testicle|titt|twat|vittu|wank|wetback|wichser|wop|yed|zabourah/gi;
	 
	 
	 if ($(fieldid).val().match(reBadWords) || $(fieldid).val().length < 3) {
           	$(fieldid).parent().find('.field-error__validation-message').html('Invalid Entry Please Check');
       		 $(fieldid).parent().find('.field-error__validation-message').fadeIn();
       		 addError($(fieldid));
       		 return false;
        }else{
        	addSuccess(fieldid);
       		 $(fieldid).parent().find('.field-error__validation-message').fadeOut();
       		 return true;
        }
}
function addGreen() {
    $('#postcode').removeClass("alert-error");
    $('#postcode').addClass("alert-success");
    $('#fulladdress input, #fulladdress select').removeClass("alert-error");
    $('#fulladdress input, #fulladdress select').addClass("alert-success");
}
function addred() {
    $('#selectedaddress').addClass("alert-error");
    $('#selectedaddress').removeClass("alert-success");
}
function addpostcodesellect() {
    hideBox();
    $('#searchpostcode').after('<select name="selectedaddress" id="selectedaddress" class="form-control input-md" style="display:none;"></select>');

}


function hideBox() {
    $('#postcode').parent().find('.field-error__validation-message').hide();
}
//functions
var postcodes = [];


var selectaddress = function () {
    $("#selectedaddress").change(function () {
        var selectedAddress = $('#selectedaddress').val();
        postcodes[selectedAddress].line1 = postcodes[selectedAddress].line1.replace('|', '');
        postcodes[selectedAddress].line1 = postcodes[selectedAddress].line1.replace('/', ' ');
        postcodes[selectedAddress].line2 = postcodes[selectedAddress].line2.replace('|', '');
        postcodes[selectedAddress].line2 = postcodes[selectedAddress].line2.replace('/', ' ');
        postcodes[selectedAddress].line3 = postcodes[selectedAddress].line3.replace('|', '');
        postcodes[selectedAddress].line3 = postcodes[selectedAddress].line3.replace('/', ' ');

        postcodes[selectedAddress].premise = postcodes[selectedAddress].premise.replace('|', '');
        postcodes[selectedAddress].premise = postcodes[selectedAddress].premise.replace('/', ' ');

        $("#addressmx").val(postcodes[selectedAddress].premise);
        $("#townselector").val(postcodes[selectedAddress].town);
        $("#countyselector").val(postcodes[selectedAddress].county);
        $("#countryselector").val('United Kingdom');

        $(postcodelookupplacer).show();
        $('#selectedaddress').hide();
        addGreen();
    });
};

function displayErrors(items) {
    var errhtml = '';

    $.each(items, function (key, value) {
        errhtml += key + "| Val:" + value + "<br>";
    });

    $("#" + errrodisp).html(errhtml);
}

function displayFieldErrors(items) {
    var errhtml = '';
    $('input,select').removeClass("alert-error");
    $('input,select').addClass("alert-success");
    $('input,select').parent().find('.field-error__validation-message').fadeOut();
    $.each(items, function (key, value) {
        fieldname = $('<div></div>').append(value).find('span').html();


        if (fieldname == 'Title') {
            fieldid = title_inputid;
        }
        if (fieldname == 'Name') {
            fieldid = firstname_inputid;
        }
        if (fieldname == 'Surname') {
            fieldid = surname_inputid;
        }
        if (fieldname == 'Telephone') {
            fieldid = phone_inputid;
        }
        if (fieldname == 'Email') {

            fieldid = email_inputid;
        }
        if (fieldname == 'Postcode') {
            fieldid = postcode_inputid;
        }
        if (fieldname == 'Terms') {
            fieldid = termsandcons_inputid;
        }
        if (fieldname == 'Address') {
            fieldid = '#addressmx';
        }
        if (fieldname == 'Town') {
            fieldid = '#townselector';
        }
        if (fieldname == 'County') {
            fieldid = '#countyselector';
        }
        if (fieldname == 'Country') {
            fieldid = '#countryselector';
        }
        if (fieldname == 'Dob') {
            fieldid = '' + dobday_inputid + ',' + dobmonth_inputid + ',' + dobyear_inputid + '';
        }

        $(fieldid).removeClass("alert-success");
        $(fieldid).addClass("alert-error");
        $(fieldid).parent().find('.field-error__validation-message').fadeIn();
        $(fieldid).parent().find('.field-error__validation-message').html(value);
        if ($('#selectedaddress').val() == '') {
            $('#selectedaddress').removeClass("alert-success");
            $('#selectedaddress').addClass("alert-error");
        } else {
            $('.input-with-icon').find('.field-error__validation-message').hide();
        }
        if ($("#terms").is(':checked')) {
            $("#terms").parent().find('span').css('color', 'green'); // checked
        } else {
            $("#terms").parent().find('span').css('color', 'red');  // unchecked
        }
        errhtml += key + "| Val:" + fieldname + "|" + fieldid + "|" + '' + "<br>";
    });

    //$("#" + errrodisp).html(errhtml);
}
function getextrafieds() {
    var extralist = '{"sid":"' + SID + '",';

    $(".extrafieldsmx").each(function () {
        if (typeof $(this).attr('id') != 'undefined') {
            extrafieldname = $(this).attr('id');
            extralist += '"' + extrafieldname + '":' + '"' + getvalue(this) + '",';
        }
    });


    if (extralist.length > 1) {
        extralist = extralist.slice(0, -1) + "}";
    }
    else {
        extralist = "{}";
    }
    return extralist;
}
function realtimeval(type, vaule) {
    validatedPhone = true;
    validatedEmail = true;
    if (type == 'email') {
        if ($('#email').val() == '') {
            $('#email').removeClass("alert-success");
            $('#email').addClass("alert-error");
            $('#email').parent().find('.field-error__validation-message').fadeIn();
            $('#email').parent().find('.field-error__validation-message').html('Please Enter Your Email');
            return false;
        } else {
            $('#email').addClass("alert-success");
            $('#email').removeClass("alert-error");
            $('#email').parent().find('.field-error__validation-message').hide();
            if(checkbadwords('#email')){
            	
            }else{
            return false;	
            }
        }
    }
    var items = [];

}
function getvalidationsettings(id) {
    return $(id).attr('lpval');

}
function getvalue(id) {

    if ($(id).is(':checkbox')) {
        if ($(id).is(':checked')) {
            return 'checked';
        } else {
            return '';
        }
    } else if ($(id).is(':radio')) {
        return $(id).val();
    }
    else {
        return $(id).val();
    }
}
function getdata() {
    var userdata = {};
    var valsettings = {};

    if (title_inputid != '') {
        titlemx = getvalue(title_inputid);
        userdata['title'] = titlemx;
        valsettings['title'] = getvalidationsettings(title_inputid);

        if (titlemx == 'Mr' || titlemx == 'Mx') {
            gendermx = 'Male';
        }
        else {
            gendermx = 'Female';
        }
        userdata['gender'] = gendermx;
    }
    if (firstname_inputid != '') {
        userdata['name'] = getvalue(firstname_inputid);
        valsettings['name'] = getvalidationsettings(firstname_inputid);
    }
    if (surname_inputid != '') {
        userdata['surname'] = getvalue(surname_inputid);
        valsettings['surname'] = getvalidationsettings(surname_inputid);
    }
    if (phone_inputid != '') {
        userdata['telephone'] = getvalue(phone_inputid);
        valsettings['telephone'] = getvalidationsettings(phone_inputid);
    }
    if (email_inputid != '') {
        userdata['email'] = getvalue(email_inputid);
        valsettings['email'] = getvalidationsettings(email_inputid);
    }
    if (postcode_inputid != '') {
        userdata['postcode'] = getvalue(postcode_inputid);
        valsettings['postcode'] = getvalidationsettings(postcode_inputid);
    }
    if (termsandcons_inputid != '') {
        userdata['terms'] = getvalue(termsandcons_inputid);
        valsettings['terms'] = getvalidationsettings(termsandcons_inputid);
    }

    if (dobday_inputid != '' && dobmonth_inputid != "" && dobyear_inputid != "") {
        day = getvalue(dobday_inputid);
        month = getvalue(dobmonth_inputid);
        year = getvalue(dobyear_inputid);
        if (day != '' & month != '' & year != '') {
            userdata['dob'] = day + '-' + month + '-' + year;
        } else {
            userdata['dob'] = '';
        }

        valsettings['dob'] = getvalidationsettings(dobday_inputid);
    }

    if ($('#addressmx').length)         // use this if you are using id to check
    {
        userdata['address'] = getvalue('#addressmx');
        valsettings['address'] = getvalidationsettings('#addressmx');
    }

    if ($('#townselector').length)         // use this if you are using id to check
    {
        userdata['town'] = getvalue('#townselector');
        valsettings['town'] = getvalidationsettings('#townselector');
    }
    if ($('#countyselector').length)         // use this if you are using id to check
    {
        userdata['county'] = getvalue('#countyselector');
        valsettings['county'] = getvalidationsettings('#countyselector');
    }
    if ($('#countryselector').length)         // use this if you are using id to check
    {
        userdata['country'] = getvalue('#countryselector');
        valsettings['country'] = getvalidationsettings('#countryselector');
    }


    var returndata = {"values": userdata, "validation": valsettings};
    return returndata;
}
function generatesenddata(id) {
    var empty = '';

    var extralist = "{}";
    var validatefield = "{}";
    var userinfo = getdata();
    var extrafields = getextrafieds();
    var validatefield = "{";

    var leadvalues = '{"offer_id":"'+offernumber+'","ip":"' + userip + '","clientid":"' + clientid + '","partnerid":"' + partnerid + '","lp_id":"' + lp_id + '","projectid":"' + projectid + '","source":"' + source + '","mobile":"",';

    $.each(userinfo['values'], function (key, value) {
        leadvalues = leadvalues + '"' + key + '":' + '"' + value + '",';
    });

    $.each(userinfo['validation'], function (key, value) {
        validatefield = validatefield + '"' + key + '":' + '"' + value + '",';
    });
    validatefield += '"ip":"required"}';
    leadvalues += '"extrafields":' + extrafields + ',"settings":{"pingtree":"' + pingtree + '","realtime":"' + realtimeclientsubmition + '"},"custvalidate":' + validatefield + '}';

    lead = JSON.parse(leadvalues);
    datadd = JSON.stringify(lead);
    return datadd;
}
function showLoader() {
    $('#singlebutton').find('span').hide();
    $('#singlebutton').find('#loader').show();
    var imgHeight = 30;
    var numImgs = 19;
    var cont = 0;

    var animation = setInterval(function () {
        var position = -1 * (cont * imgHeight);
        $('#loader').find('img').css('margin-top', position);

        cont++;
        if (cont == numImgs) {
            cont = 0;
        }
    }, 30);
}
function hideLoader() {
    $('#singlebutton').find('span').show();
    $('#singlebutton').find('#loader').hide();
}
function valid_postcode(postcode) {
    postcode = postcode.replace(/\s/g, "");
    var regex = /[0-9]/i;
    return regex.test(postcode);
}
function checkPostdoe() {
    if (valid_postcode($('#postcode').val()) == true) {
    	flag = true;
        ValidatedPostcode = true;
    } else {
        ValidatedPostcode = false;
    	flag = false;
    }
}
// Take Over submition Action
var frm = $("" + formid);
frm.submit(function (ev) {
    realtimeval("email", $('#email').val());
    checkPostdoe();
    if ($('#townselector').val() === '' && $('#postcode').val() != '') {
        $('.pre_info').fadeIn();
    }
    if ($('#townselector').val() === '') {
        $('#searchpostcode').css('cssText', 'color:red; border: 2px solid red; position: relative;top: -2px;  font-size: 13px;');
        
    } else {
        $('#searchpostcode').css('cssText', 'color:black; border: 0;position: static;top: 0px;  font-size: 14px;');
        $('.pre_info').hide();
    }
    if (ValidatedPostcode == true) {
    	flag = true;
        if (validatedEmail == true && validatedPhone == true) {
            if ($('#sendlead input').hasClass('alert-error')) {

            }

        } else if (validatedEmail != true) {
            $('#email').removeClass("alert-success");
            $('#email').addClass("alert-error");
    		flag = false;

        } else if (validatedPhone != true) {
            $('#phone').removeClass("alert-success");
            $('#phone').addClass("alert-error");
    		flag = false;
        }
    } else if ($('#postcode').val() == '') {
        addError('#postcode');
        $('#postcode').parent().find('.field-error__validation-message').fadeIn();
    	flag = false;
    }/* else {
        addError('#postcode');
        $('#postcode').parent().find('.field-error__validation-message').fadeIn();
        $('#postcode').parent().find('.field-error__validation-message').html('Invalid Postcode');
        $('.input-with-icon .field-error__validation-message').css('color', '#e30000');
        $('.input-with-icon .field-error__validation-message').css('margin-top', '0');
        $('.input-with-icon .field-error__validation-message').css('padding', '0');
        $('.input-with-icon .field-error__validation-message').css('border', '0');
    	flag = false;
    }*/
    ev.preventDefault();
    //获取RUL参数值
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return unescape(r[2]); return null;
    }
    if (flag) {

    var loacation = window.location.href;
    var transaction_id = "";
    if (/transaction_id/.test(loacation)){
        transaction_id = getUrlParam("transaction_id");
    }
    jQuery.ajax({
        dataType: 'json',
        type: "GET",
        async: false,
        url: "http://global.ymtracking.com/conv",
        data: "transaction_id=" + transaction_id,
        success: function (response) {

            if (response != null)
            {
                if (response.errors)
                {
                    // displayFieldErrors(items);
                    if (type == 'phone') {
                        $('#phone').removeClass("alert-success");
                        $('#phone').addClass("alert-error");
                        $('#phone').parent().find('.field-error__validation-message').show();
                        $('#phone').parent().find('.field-error__validation-message').html(response.errors);
                        validatedPhone = false;
                    } else {
                        $('#email').removeClass("alert-success");
                        $('#email').addClass("alert-error");
                        $('#email').parent().find('.field-error__validation-message').show();
                        $('#email').parent().find('.field-error__validation-message').html('Email Is Invalid');
                        validatedEmail = false;
                    }
                }
                else // Do if response.sent and .errors are not true
                {

                    if (type == 'phone') {
                        $('#phone').addClass("alert-success");
                        $('#phone').removeClass("alert-error");
                        $('#phone').parent().find('.field-error__validation-message').hide();
                        window.phonevalidated = false;
                        items[0] = '<span>Telephone</span>';
                    }
                    if (type == 'email') {
                        $('#email').addClass("alert-success");
                        $('#email').removeClass("alert-error");
                        $('#email').parent().find('.field-error__validation-message').hide();
                        window.emailvalidated = false;
                        items[0] = '<span>Email</span>';
                    }

                }
            }
            else {

                if (type == 'phone') {
                    window.phonevalidated = true;
                }
                if (type == 'email') {
                    window.emailvalidated = true;
                }

            }

        }});

    }
    return false;
});
$("#phone").on("focusout", function () {
    realtimeval("phone", $(this).val());
});
$("#email").on("change", function () {
    realtimeval("email", $(this).val());
});
$("#postcode").on("change", function () {
    if (ValidatedPostcode == true && $('#postcode').val() > 4) {

    } else if ($('#postcode').val() == '') {
        addError('#postcode');
        $('#postcode').parent().find('.field-error__validation-message').fadeIn();
    } else {
        addError('#postcode');
        $('#postcode').parent().find('.field-error__validation-message').fadeIn();
        $('#postcode').parent().find('.field-error__validation-message').html('Invalid Postcode');
        $('.input-with-icon .field-error__validation-message').css('color', '#e30000');
        $('.input-with-icon .field-error__validation-message').css('margin-top', '0');
        $('.input-with-icon .field-error__validation-message').css('padding', '0');
        $('.input-with-icon .field-error__validation-message').css('border', '0');
    }
});

function addError(c) {
    $(c).addClass("alert-error");
    $(c).removeClass("alert-success");
}
function addSuccess(c) {
    $(c).addClass("alert-success");
    $(c).removeClass("alert-error");
}
function showError(c) {
    $(c).parent().find('.field-error__validation-message').fadeIn();
}
function hideError(c) {
    $(c).parent().find('.field-error__validation-message').fadeOut();

}

function CheckFormValid(c, type, a, b, am, bm) {
    if (type === 'input') {
        if ($(c).val().length < a && $(c).val().length >= b && $(c).val() != '') {
            addSuccess(c);
            $(c).parent().find('.field-error__validation-message').fadeOut();
            flag = true;
        } else if ($(c).val().length >= a) {
            $(c).parent().find('.field-error__validation-message').html(am);
            $(c).parent().find('.field-error__validation-message').fadeIn();
            addError(c);
            flag = false;
        } else if ($(c).val().length < b) {
            $(c).parent().find('.field-error__validation-message').html(bm);
            $(c).parent().find('.field-error__validation-message').fadeIn();
            addError(c);
            flag = false;
        } else {
            $(c).parent().find('.field-error__validation-message').fadeIn();
            addError(c);
            flag = false;
        }
    }
    if (type === 'select') {

        if ($(c).val() != '') {
            addSuccess(c);
            flag = true;
            $(c).parent().find('.field-error__validation-message').fadeOut();
        } else {
            $(c).parent().find('.field-error__validation-message').fadeIn();
            addError(c);
            flag = false;
        }
    }
}
$(document).ready(function () {

    $('#singlebutton').on('click', function () {
        CheckFirstName();
        CheckLastName();
        //CheckFormValid('#phone', 'input', 12, 11, 'The Telephone field needs to be 11 characters', 'The Telephone field needs to be 11 numbers');
        CheckFormValid('#postcode', 'select', 6);
        CheckFormValid('#usertitle', 'select');
        //CheckFormValid('#email', 'select', 200, 3, 'Please enter your email');
        CheckFormValid('#dobday', 'select');
        CheckFormValid('#dobmonth', 'select');
        CheckFormValid('#dobyear', 'select');

    });
    $('#usertitle').change(function () {
        if ($(this).val() != '') {
            addSuccess(this);
            flag = true;
            $(this).parent().find('.field-error__validation-message').fadeOut();
        } else {
            addError(this);
            flag = false;
        }
    });
    function CheckFirstName() {
    
        var value = $('#firstname').val();
        if (value.length < 200 && value.length > 2 && $('#firstname').val() != '' && checkbadwords('#firstname') != false) {
            addSuccess('#firstname');
            flag = true;
            $('#firstname').parent().find('.field-error__validation-message').fadeOut();
        } else if (value.length == 1) {
            $('#firstname').parent().find('.field-error__validation-message').html('Invalid Entry Please Check');
            $('#firstname').parent().find('.field-error__validation-message').fadeIn();
            addError('#firstname');
            flag = false;
        } else if (value.length == '') {
            $('#firstname').parent().find('.field-error__validation-message').html('Please Enter Your First Name');
            $('#firstname').parent().find('.field-error__validation-message').fadeIn();
            addError('#firstname');
            flag = false;
        } else {

        }
    }
    function CheckLastName() {
        var value = $('#lastname').val();
        if (value.length < 200 && value.length > 2 && $('#lastname').val() != '' && checkbadwords('#lastname') != false) {
            addSuccess('#lastname');
            $('#lastname').parent().find('.field-error__validation-message').fadeOut();
            flag = true;
        } else if (value.length == 1) {
            $('#lastname').parent().find('.field-error__validation-message').html('Invalid Entry Please Check');
            $('#lastname').parent().find('.field-error__validation-message').fadeIn();
            addError('#lastname');
            flag = false;
        } else if (value.length == '') {
            $('#lastname').parent().find('.field-error__validation-message').html('Please Enter Your Last Name');
            $('#lastname').parent().find('.field-error__validation-message').fadeIn();
            addError('#lastname');
            flag = false;
        } else {

        }
    }
    
    $('#firstname').change(function () {    	
    
    		CheckFirstName();
    	       
    });
    $('#lastname').change(function () {
    	

    		CheckLastName();
    	    
        
    });
    $('#dobday').change(function () {
        if ($(this).val() != '') {
            addSuccess(this);
            flag = true;
            $(this).parent().find('.field-error__validation-message').fadeOut();
        } else {
            addError(this);
            flag = false;
        }
    });
    $('#dobmonth').change(function () {
        if ($(this).val() != '') {
            addSuccess(this);
            flag = true;
            $(this).parent().find('.field-error__validation-message').fadeOut();
        } else {
            addError(this);
            flag = false;
        }
    });
    $('#dobyear').change(function () {
        if ($(this).val() != '') {
            addSuccess(this);
            flag = true;
            $(this).parent().find('.field-error__validation-message').fadeOut();
        } else {
            addError(this);
            flag = false;
        }
    });
    $('#postcode').change(function () {
        if ($(this).val() != '' && $(this).val().length > 4 && $(this).val().length < 12) {
            addSuccess(this);
            flag = true;
            $(this).parent().find('.field-error__validation-message').css('cssText', 'display:none !important;');
        } else {
            addError(this);
            flag = false;
        }
    });
});
