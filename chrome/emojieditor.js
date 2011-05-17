(function(){
     var imgUrlBase = "https://imode.net/cmn/m/ext/imail/images/iemoji/o-";

     var emojichar2gifnum = {
         "\uE63E": "111", "\uE63F": "112", "\uE640": "249", "\uE641": "156", "\uE642": "157", 
         "\uE643": "089", "\uE644": "160", "\uE645": "097", "\uE646": "243", "\uE647": "242", 
         "\uE648": "088", "\uE649": "247", "\uE64A": "129", "\uE64B": "229", "\uE64C": "093", 
         "\uE64D": "146", "\uE64E": "096", "\uE64F": "098", "\uE650": "117", "\uE651": "252", 
         "\uE652": "072", "\uE653": "154", "\uE654": "063", "\uE655": "078", "\uE656": "064", 
         "\uE657": "069", "\uE658": "194", "\uE659": "220", "\uE65A": "214", "\uE65B": "159", 
         "\uE65C": "091", "\uE65D": "108", "\uE65E": "150", "\uE65F": "151", "\uE660": "193", 
         "\uE661": "145", "\uE662": "161", "\uE663": "238", "\uE664": "203", "\uE665": "153", 
         "\uE666": "130", "\uE667": "155", "\uE668": "164", "\uE669": "212", "\uE66A": "062", 
         "\uE66B": "166", "\uE66C": "162", "\uE66D": "084", "\uE66E": "186", "\uE66F": "226", 
         "\uE670": "236", "\uE671": "197", "\uE672": "204", "\uE673": "205", "\uE674": "208", 
         "\uE675": "140", "\uE676": "052", "\uE677": "239", "\uE678": "233", "\uE679": "152", 
         "\uE67A": "250", "\uE67B": "044", "\uE67C": "241", "\uE67D": "045", "\uE67E": "075",
         "\uE67F": "235", "\uE680": "138", "\uE681": "051", "\uE682": "050", "\uE683": "114",
         "\uE684": "224", "\uE685": "209", "\uE686": "198", "\uE687": "158", "\uE688": "107",
         "\uE689": "217", "\uE68A": "168", "\uE68B": "060", "\uE68C": "165", "\uE68D": "191",
         "\uE68E": "071", "\uE68F": "073", "\uE690": "054", "\uE691": "131", "\uE692": "142",
         "\uE693": "101", "\uE694": "102", "\uE695": "103", "\uE696": "234", "\uE697": "099",
         "\uE698": "148", "\uE699": "039", "\uE69A": "245", "\uE69B": "149", "\uE69C": "109",
         "\uE69D": "182", "\uE69E": "087", "\uE69F": "082", "\uE6A0": "123", "\uE6A1": "126",
         "\uE6A2": "127", "\uE6A3": "223", "\uE6A4": "056", "\uE6A5": "100", "\uE6AC": "049",
         "\uE6AD": "175", "\uE6AE": "210", "\uE6B1": "083", "\uE6B2": "030", "\uE6B3": "092",
         "\uE6B7": "025", "\uE6B8": "023", "\uE6B9": "011", "\uE6BA": "110", "\uE6CE": "024",
         "\uE6CF": "021", "\uE6D0": "015", "\uE6D1": "019", "\uE6D2": "020", "\uE6D3": "218",
         "\uE6D4": "189", "\uE6D5": "188", "\uE6D6": "113", "\uE6D7": "124", "\uE6D8": "016",
         "\uE6D9": "199", "\uE6DA": "116", "\uE6DB": "055", "\uE6DC": "065", "\uE6DD": "167",
         "\uE6DE": "230", "\uE6DF": "206", "\uE6E0": "066", "\uE6E1": "219", "\uE6E2": "002",
         "\uE6E3": "003", "\uE6E4": "004", "\uE6E5": "005", "\uE6E6": "006", "\uE6E7": "007",
         "\uE6E8": "008", "\uE6E9": "009", "\uE6EA": "010", "\uE6EB": "001", "\uE6EC": "163",
         "\uE6ED": "106", "\uE6EE": "094", "\uE6EF": "192", "\uE6F0": "185", "\uE6F1": "043",
         "\uE6F2": "036", "\uE6F3": "180", "\uE6F4": "176", "\uE6F5": "059", "\uE6F6": "184",
         "\uE6F7": "029", "\uE6F8": "035", "\uE6F9": "053", "\uE6FA": "174", "\uE6FB": "173",
         "\uE6FC": "179", "\uE6FD": "202", "\uE6FE": "125", "\uE6FF": "216", "\uE700": "195",
         "\uE701": "133", "\uE702": "013", "\uE703": "012", "\uE704": "014", "\uE705": "170",
         "\uE706": "027", "\uE707": "042", "\uE708": "074", "\uE709": "080", "\uE70A": "081",
         "\uE70B": "118", "\uE70C": "017", "\uE70D": "018", "\uE70E": "026", "\uE70F": "038",
         "\uE710": "231", "\uE711": "068", "\uE712": "070", "\uE713": "076", "\uE714": "079",
         "\uE715": "190", "\uE716": "200", "\uE717": "221", "\uE718": "227", "\uE719": "248",
         "\uE71A": "244", "\uE71B": "105", "\uE71C": "136", "\uE71D": "144", "\uE71E": "121",
         "\uE71F": "143", "\uE720": "141", "\uE721": "178", "\uE722": "085", "\uE723": "086",
         "\uE724": "177", "\uE725": "213", "\uE726": "132", "\uE727": "104", "\uE728": "028",
         "\uE729": "046", "\uE72A": "032", "\uE72B": "037", "\uE72C": "128", "\uE72D": "240",
         "\uE72E": "120", "\uE72F": "022", "\uE730": "057", "\uE731": "061", "\uE732": "187",
         "\uE733": "147", "\uE734": "215", "\uE735": "222", "\uE736": "225", "\uE737": "232",
         "\uE738": "137", "\uE739": "139", "\uE73A": "090", "\uE73B": "122", "\uE73C": "135",
         "\uE73D": "134", "\uE73E": "237", "\uE73F": "119", "\uE740": "095", "\uE741": "058",
         "\uE742": "041", "\uE743": "077", "\uE744": "196", "\uE745": "183", "\uE746": "246",
         "\uE747": "181", "\uE748": "115", "\uE749": "033", "\uE74A": "067", "\uE74B": "169",
         "\uE74C": "171", "\uE74D": "201", "\uE74E": "034", "\uE74F": "172", "\uE750": "211",
         "\uE751": "251", "\uE752": "031", "\uE753": "047", "\uE754": "048", "\uE755": "207",
         "\uE756": "228", "\uE757": "040" 
     };

     var activeEditor = null;

     function _hideElement(elem){
         elem.style.display = "none";
     }

     function _getFirstElementByName(name){
         var ret;
         try{
             ret = document.getElementsByName(name)[0];
         } catch (e) {}
         return ret;
     }
     
     function createEmojiImgUrlFromChar(c){
         var num = emojichar2gifnum[c];
         if(!num){
             return "";
         }
         return imgUrlBase + num + '.gif';
     }

     function createEmojiButton(emoji){
         var img = document.createElement('img');
         if(emojichar2gifnum[emoji] == "   "){
             return null;
         }
         img.src = createEmojiImgUrlFromChar(emoji);
         img.charCode = emoji;
         img.onclick = function(){
             activeEditor.execCommand('insertimage', false, img.src);
             activeEditor.childNodes[0].childNodes[1].focus();
         };
         return img;
     }
     
     function getCharCodeByImg(img){
         var url = img.src;
         var num = url.substr(imgUrlBase.length, 3);
         for(var c in emojichar2gifnum){
             if(emojichar2gifnum[c] == num){
                 return c;
             }
         }
         return "";
     }

     function appendEditor(id, dst){
         var iframe = document.createElement('iframe');
         iframe.id = id;
         dst.appendChild(iframe);
         iframe.contentDocument.designMode = "on";
         iframe.contentDocument.childNodes[0].onkeypress = function(e){
             activeEditor = iframe.contentDocument;
         };
         iframe.contentDocument.childNodes[0].onclick = function(e){
             activeEditor = iframe.contentDocument;
         };
         return iframe;
     }

     function appendSubjectEditor(dst){
         var editor = appendEditor('emojable_subject_editor', dst);
         editor.height = '20px';
     }

     function appendBodyEditor(dst){
         var editor = appendEditor('emojable_body_editor', dst);
     }

     function appendEmojiPalette(dst){
         var emojiPalette = document.createElement('div');
         for(var emoji in emojichar2gifnum){
             var img = createEmojiButton(emoji);
             if(img){
                 emojiPalette.appendChild(img);
             }
         }
         
         dst.appendChild(emojiPalette);
         return;
     }

     function showEmojiEditor(){
         var subjectParent = getOriginalSubjectEditor().parentNode;
         var bodyParent = getOriginalBodyEditor().parentNode;

         appendSubjectEditor(subjectParent);
         appendBodyEditor(bodyParent);
         appendEmojiPalette(bodyParent);
         
         var form = document.getElementsByTagName('form')[0];
         form.onsubmit = function(){
             exportMessage(getSubjectEditor(), getOriginalSubjectEditor());
             exportMessage(getBodyEditor(), getOriginalBodyEditor());
         };
     };

     function exportMessage(from, to){
         var editor = from;
         var nodes = editor.contentDocument.body.childNodes;
         var text = "";
         for(var i in nodes){
             switch(nodes[i].nodeName){
             case 'IMG':
                 text += getCharCodeByImg(nodes[i]);
                 break;
             case '#text':
                 text += nodes[i].data;
                 break;
             default:
             }
         }
         to.value = text;
     }

     function importMessage(from, to){
         var editor = to;
         for(var i in from.value){
             var e = null;
             if(emojichar2gifnum[from.value[i]]){
                 e = document.createElement('img');
                 e.src = createEmojiImgUrlFromChar(from.value[i]);
             }else{
                 e = document.createTextNode(from.value[i]);
             }
             editor.contentDocument.body.appendChild(e);
         }
     }

     function getSubjectEditor(){
         return document.getElementById('emojable_subject_editor');
     }

     function getBodyEditor(){
         return document.getElementById('emojable_body_editor');
     }
     
     function getOriginalBodyEditor(){
         return _getFirstElementByName('mlbody');
     }

     function getOriginalSubjectEditor(){
         return _getFirstElementByName('subject');
     }

     function main(){
         var originalSubjectEditor = getOriginalSubjectEditor();
         var originalBodyEditor = getOriginalBodyEditor();
         
         if(!originalSubjectEditor){
             console.log('mail subject input field not found');
             return;
         }
         if(!originalBodyEditor){
             console.log('mail body textarea not found');
             return;
         }
         
         _hideElement(originalSubjectEditor);
         _hideElement(originalBodyEditor);

         showEmojiEditor(originalBodyEditor); 
         importMessage(originalSubjectEditor, getSubjectEditor());
         importMessage(originalBodyEditor, getBodyEditor());
     }

     main();
 })();
