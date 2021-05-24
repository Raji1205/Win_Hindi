if(typeof keyman === 'undefined') {console.log('Keyboard requires KeymanWeb 10.0 or later');if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");} else {KeymanWeb.KR(new Keyboard_common_devanagari());}function Keyboard_common_devanagari(){this.KI="Keyboard_common_devanagari";this.KN="Common Devanagari";this.KMINVER="10.0";this.KV={F:' 1em "Arial"',K102:0};this.KV.KLS={"shift": ["~","!","@","#","$","%","^","&","*","(",")","_","+","","","","ऽ","ङ","ऐ","ऋ","थ","ठ","ऊ","ई","औ","फ","ढ","ऑ","”","","","","आ","ँ","ध","ठ","घ","ः","झ","ख","ळ",":","’","","","","","","","ष","X","छ","ऒ","भ","ण","ऺ","<",">","?","","","","","",""],"default": ["`","1","2","3","4","5","6","7","8","9","0","-","=","","","","़","ञ","ए","र","त","य","उ","इ","ओ","प","ड","ऍ","“","","","","अ","स","द","ट","ग","ह","ज","क","ल",";","‘","","","","","","","श","x","च","व","ब","न","म",",","।","/","","","","","",""],"alt": ["","","","","","","","","","","","ॡ","॑","","","","","ॵ","ॕ","","","","ॶ","","","","","","","","","","ऒ","","ॸ","","","","ॹ","","","","","","","","","","","","","","","","","","","","ऌ","","","","","",""],"shift-alt": ["","","","","","","ॠ","","","","","","","","","","","","","","","","ॷ","","ॴ","","","","ॎ","","","","ॲ","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]};this.KV.BK=(function(x){var e=Array.apply(null,Array(65)).map(String.prototype.valueOf,""),r=[],v,i,m=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];for(i=m.length-1;i>=0;i--)if((v=x[m[i]])||r.length)r=(v?v:e).slice().concat(r);return r})(this.KV.KLS);this.KDU=1;this.KH='';this.KM=0;this.KBVER="1.0";this.KMBM=0x0050;this.KVKL={"tablet":{"displayUnderlying":false,"layer":[{"id":"default","row":[{"id":"1","key":[{"id":"K_1","text":"1"},{"id":"K_2","text":"2"},{"id":"K_3","text":"3"},{"id":"K_4","text":"4"},{"id":"K_5","text":"5"},{"id":"K_6","text":"6"},{"id":"K_7","text":"7"},{"width":"138","id":"K_8","text":"8"},{"id":"K_9","text":"9"},{"width":"131","id":"K_0","text":"0"},{"width":"102","id":"K_HYPHEN","text":"-"},{"width":"126","id":"K_EQUAL","text":"="}]},{"id":"2","key":[{"id":"K_Q","pad":"75","text":"\u093C"},{"id":"K_W","text":"\u091E"},{"id":"K_E","text":"\u090F"},{"id":"K_R","text":"\u0930"},{"id":"K_T","text":"\u0924"},{"id":"K_Y","text":"\u092F"},{"id":"K_U","text":"\u0909"},{"id":"K_I","text":"\u0907"},{"id":"K_O","text":"\u0913"},{"width":"109","id":"K_P","text":"\u092A"},{"width":"118","id":"K_LBRKT","text":"\u0921"},{"id":"K_RBRKT","text":"\u090D"}]},{"id":"3","key":[{"id":"K_BKQUOTE","text":"`"},{"id":"K_A","text":"\u0905"},{"id":"K_S","text":"\u0938"},{"id":"K_D","text":"\u0926"},{"id":"K_F","text":"\u091F"},{"id":"K_G","text":"\u0917"},{"id":"K_H","text":"\u0939"},{"id":"K_J","text":"\u091C"},{"id":"K_K","text":"\u0915"},{"width":"87","id":"K_L","text":"\u0932"},{"id":"K_COLON","text":";"},{"width":"89","id":"K_QUOTE","text":"\u2018"},{"id":"K_BKSLASH","text":"\u201C"}]},{"id":"4","key":[{"nextlayer":"shift","width":"160","id":"K_SHIFT","sp":"1","text":"*Shift*"},{"id":"K_Z","text":"\u0936"},{"id":"K_X","text":"x"},{"id":"K_C","text":"\u091A"},{"id":"K_V","text":"\u0935"},{"id":"K_B","text":"\u092C"},{"id":"K_N","text":"\u0928"},{"id":"K_M","text":"\u092E"},{"id":"K_COMMA","text":","},{"width":"115","id":"K_PERIOD","text":"\u0964"},{"width":"117","id":"K_SLASH","text":"\/"},{"width":"100","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"5","key":[{"nextlayer":"alt","width":"130","id":"K_LCONTROL","sp":"1","text":"alt","sk":[{"nextlayer":"alt","id":"K_LCONTROL","sp":"1","text":"alt"},{"nextlayer":"shift-alt","id":"K_LCONTROL","sp":"1","text":"shift-alt"}]},{"width":"140","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"990","id":"K_SPACE"},{"width":"145","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]},{"id":"shift","row":[{"id":"1","key":[{"id":"K_1","text":"!"},{"id":"K_2","text":"@"},{"id":"K_3","text":"#"},{"id":"K_4","text":"$"},{"id":"K_5","text":"%"},{"id":"K_6","text":"^"},{"width":"122","id":"K_7","text":"&"},{"id":"K_8","text":"*"},{"width":"128","id":"K_9","text":"("},{"id":"K_0","text":")"},{"width":"115","id":"K_HYPHEN","text":"_"},{"id":"K_EQUAL","text":"+"}]},{"id":"2","key":[{"id":"K_Q","pad":"75","text":"\u093D"},{"id":"K_W","text":"\u0919"},{"id":"K_E","text":"\u0910"},{"id":"K_R","text":"\u090B"},{"id":"K_T","text":"\u0925"},{"id":"K_Y","text":"\u0920"},{"id":"K_U","text":"\u090A"},{"id":"K_I","text":"\u0908"},{"id":"K_O","text":"\u0914"},{"id":"K_P","text":"\u092B"},{"id":"K_LBRKT","text":"\u0922"},{"id":"K_RBRKT","text":"\u0911"}]},{"id":"3","key":[{"id":"K_BKQUOTE","text":"~"},{"id":"K_A","text":"\u0906"},{"id":"K_S","text":"\u0901"},{"id":"K_D","text":"\u0927"},{"id":"K_F","text":"\u0920"},{"id":"K_G","text":"\u0918"},{"id":"K_H","text":"\u0903"},{"id":"K_J","text":"\u091D"},{"id":"K_K","text":"\u0916"},{"id":"K_L","text":"\u0933"},{"id":"K_COLON","text":":"},{"width":"73","id":"K_QUOTE","text":"\u2019"},{"width":"75","id":"K_BKSLASH","text":"\u201D"}]},{"id":"4","key":[{"nextlayer":"default","width":"160","id":"K_SHIFT","sp":"1","text":"*Shift*"},{"id":"K_Z","text":"\u0937"},{"id":"K_X","text":"X"},{"id":"K_C","text":"\u091B"},{"id":"K_V","text":"\u0912"},{"id":"K_B","text":"\u092D"},{"id":"K_N","text":"\u0923"},{"width":"110","id":"K_M","text":"\u093A"},{"id":"K_COMMA","text":"<"},{"id":"K_PERIOD","text":">"},{"id":"K_SLASH","text":"?"},{"width":"100","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"5","key":[{"nextlayer":"alt","width":"130","id":"K_LCONTROL","sp":"1","text":"alt","sk":[{"nextlayer":"alt","id":"K_LCONTROL","sp":"1","text":"alt"},{"nextlayer":"shift-alt","id":"K_LCONTROL","sp":"1","text":"shift-alt"}]},{"width":"140","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"980","id":"K_SPACE"},{"width":"145","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]},{"id":"alt","row":[{"id":"1","key":[{"id":"K_1"},{"id":"K_2"},{"id":"K_3"},{"id":"K_4"},{"id":"K_5"},{"id":"K_6"},{"id":"K_7"},{"id":"K_8"},{"id":"K_9"},{"id":"K_0"},{"id":"K_HYPHEN","text":"\u0961"},{"id":"K_EQUAL","text":"\u0951"},{"width":"100","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"2","key":[{"id":"K_Q","pad":"75"},{"id":"K_W","text":"\u0975"},{"id":"K_E","text":"\u0955"},{"id":"K_R"},{"id":"K_T"},{"id":"K_Y"},{"id":"K_U","text":"\u0976"},{"id":"K_I"},{"id":"K_O"},{"id":"K_P"},{"id":"K_LBRKT"},{"id":"K_RBRKT"},{"width":"10","id":"T_new_200","sp":"10"}]},{"id":"3","key":[{"id":"K_BKQUOTE"},{"id":"K_A","text":"\u0912"},{"id":"K_S"},{"id":"K_D","text":"\u0978"},{"id":"K_F"},{"id":"K_G"},{"id":"K_H"},{"id":"K_J","text":"\u0979"},{"id":"K_K"},{"id":"K_L"},{"id":"K_COLON"},{"id":"K_QUOTE"},{"id":"K_BKSLASH"}]},{"id":"4","key":[{"nextlayer":"shift-alt","width":"160","id":"K_SHIFT","sp":"1","text":"*Shift*"},{"id":"K_oE2"},{"id":"K_Z"},{"id":"K_X"},{"id":"K_C"},{"id":"K_V"},{"id":"K_B"},{"id":"K_N"},{"id":"K_M"},{"id":"K_COMMA"},{"id":"K_PERIOD"},{"id":"K_SLASH","text":"\u090C"},{"width":"10","id":"T_new_226","sp":"10"}]},{"id":"5","key":[{"nextlayer":"default","width":"130","id":"K_LCONTROL","sp":"1","text":"default","sk":[{"nextlayer":"shift-alt","id":"K_LCONTROL","sp":"1","text":"shift-alt"}]},{"width":"140","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"930","id":"K_SPACE"},{"width":"145","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]},{"id":"shift-alt","row":[{"id":"1","key":[{"id":"K_1"},{"id":"K_2"},{"id":"K_3"},{"id":"K_4"},{"id":"K_5"},{"id":"K_6","text":"\u0960"},{"id":"K_7"},{"id":"K_8"},{"id":"K_9"},{"id":"K_0"},{"id":"K_HYPHEN"},{"id":"K_EQUAL"},{"width":"100","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"2","key":[{"id":"K_Q","pad":"75"},{"id":"K_W"},{"id":"K_E"},{"id":"K_R"},{"id":"K_T"},{"id":"K_Y"},{"id":"K_U","text":"\u0977"},{"id":"K_I"},{"id":"K_O","text":"\u0974"},{"id":"K_P"},{"id":"K_LBRKT"},{"id":"K_RBRKT"},{"width":"10","id":"T_new_436","sp":"10"}]},{"id":"3","key":[{"id":"K_BKQUOTE"},{"id":"K_A","text":"\u0972"},{"id":"K_S"},{"id":"K_D"},{"id":"K_F"},{"id":"K_G"},{"id":"K_H"},{"id":"K_J"},{"id":"K_K"},{"id":"K_L"},{"id":"K_COLON"},{"id":"K_QUOTE"},{"id":"K_BKSLASH","text":"\u094E"}]},{"id":"4","key":[{"nextlayer":"alt","width":"160","id":"K_SHIFT","sp":"1","text":"*Shift*"},{"id":"K_oE2"},{"id":"K_Z"},{"id":"K_X"},{"id":"K_C"},{"id":"K_V"},{"id":"K_B"},{"id":"K_N"},{"id":"K_M"},{"id":"K_COMMA"},{"id":"K_PERIOD"},{"id":"K_SLASH"},{"width":"10","id":"T_new_462","sp":"10"}]},{"id":"5","key":[{"nextlayer":"default","width":"130","id":"K_LCONTROL","sp":"1","text":"default","sk":[{"nextlayer":"alt","id":"K_LCONTROL","sp":"1","text":"alt"}]},{"width":"140","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"930","id":"K_SPACE"},{"width":"145","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]}]}};this.s13="aAiIuUReEY}OV]";this.s14="अआइईउऊऋएऐऎऑऔऒऍ";this.s15="kKgGWcCjJwfF[{NtTdDnpPbBmqyrlLvhzZs";this.s16="कखगघङचछजझञटठडढणतथदधनपफबभमड़यरलळवहशषस";this.s17="ढखगघङचघजझञटठडढणतथदधपफबभमड़यरलळवहशषस";this.s18="अ";this.KVER="13.0.118.0";this.gs=function(t,e) {return this.g0(t,e);};this.g0=function(t,e) {var k=KeymanWeb,r=0,m=0;if(k.KKM(e,16400,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"!");}}else if(k.KKM(e,16400,222)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"’");}}else if(k.KKM(e,16400,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"#");}}else if(k.KKM(e,16400,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"$");}}else if(k.KKM(e,16400,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"%");}}else if(k.KKM(e,16400,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"&");}}else if(k.KKM(e,16384,222)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"‘");}}else if(k.KKM(e,16400,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"(");}}else if(k.KKM(e,16400,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,")");}}else if(k.KKM(e,16400,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"*");}}else if(k.KKM(e,16400,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"+");}}else if(k.KKM(e,16384,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,",");}}else if(k.KKM(e,16384,189)) {if(k.KFCM(1,t,['-'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"–");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"-");}}else if(k.KKM(e,16448,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ॡ");}}else if(k.KKM(e,16384,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"।");}}else if(k.KKM(e,16448,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ऌ");}}else if(k.KKM(e,16384,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"/");}}else if(k.KKM(e,16384,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"0");}}else if(k.KKM(e,16384,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"1");}}else if(k.KKM(e,16384,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"2");}}else if(k.KKM(e,16384,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"3");}}else if(k.KKM(e,16384,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"4");}}else if(k.KKM(e,16384,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"5");}}else if(k.KKM(e,16384,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"6");}}else if(k.KKM(e,16384,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"7");}}else if(k.KKM(e,16384,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"8");}}else if(k.KKM(e,16384,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"9");}}else if(k.KKM(e,16400,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,":");}}else if(k.KKM(e,16384,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,";");}}else if(k.KKM(e,16400,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"<");}}else if(k.KKM(e,16448,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"॑");}}else if(k.KKM(e,16384,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"=");}}else if(k.KKM(e,16400,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,">");}}else if(k.KKM(e,16400,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"?");}}else if(k.KKM(e,16400,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"@");}}else if(k.KKM(e,16400,65)) {if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KDO(-1,t,0);}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़");k.KDO(-1,t,0);}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱ");k.KDO(-1,t,0);}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़");k.KDO(-1,t,0);}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़");k.KDO(-1,t,0);}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़");k.KDO(-1,t,0);}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़");k.KDO(-1,t,0);}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़");k.KDO(-1,t,0);}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़");k.KDO(-1,t,0);}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴ");k.KDO(-1,t,0);}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"आ");}}else if(k.KKM(e,16464,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ॲ");}}else if(k.KKM(e,16400,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"भ");}}else if(k.KKM(e,16400,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"छ");}}else if(k.KKM(e,16400,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ध");}}else if(k.KKM(e,16400,69)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़ै");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ै");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ै");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱै");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴै");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़ै");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़ै");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़ै");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़ै");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़ै");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ै");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़ै");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ऐ");}}else if(k.KKM(e,16400,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ठ");}}else if(k.KKM(e,16400,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"घ");}}else if(k.KKM(e,16400,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ः");}}else if(k.KKM(e,16400,73)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़ी");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ी");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ी");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱी");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴी");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़ी");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़ी");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़ी");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़ी");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़ी");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ी");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़ी");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ई");}}else if(k.KKM(e,16400,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"झ");}}else if(k.KKM(e,16400,75)) {if(k.KFCM(1,t,['ख'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ख");}}else if(k.KKM(e,16400,76)) {if(k.KFCM(1,t,['ळ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ळ");}}else if(k.KKM(e,16400,77)) {if(k.KFCM(1,t,['ं'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ॱ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ऺ");}}else if(k.KKM(e,16400,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ण");}}else if(k.KKM(e,16400,79)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़ौ");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ौ");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ौ");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱौ");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴौ");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़ौ");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़ौ");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़ौ");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़ौ");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़ौ");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ौ");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़ौ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"औ");}}else if(k.KKM(e,16464,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ॳ");}}else if(k.KKM(e,16400,80)) {if(k.KFCM(1,t,['फ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"फ");}}else if(k.KKM(e,16400,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ऽ");}}else if(k.KKM(e,16400,82)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़ॄ");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ॄ");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ॄ");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱॄ");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴॄ");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़ॄ");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़ॄ");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़ॄ");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़ॄ");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़ॄ");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ॄ");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़ॄ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ऋ");}}else if(k.KKM(e,16400,83)) {if(k.KFCM(1,t,['ँ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ॐ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ँ");}}else if(k.KKM(e,16400,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"थ");}}else if(k.KKM(e,16400,85)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़ू");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ू");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ू");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱू");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴू");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़ू");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़ू");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़ू");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़ू");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़ू");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ू");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़ू");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ऊ");}}else if(k.KKM(e,16464,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ॷ");}}else if(k.KKM(e,16400,86)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़ॊ");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ॊ");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ॊ");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱॊ");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴॊ");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़ॊ");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़ॊ");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़ॊ");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़ॊ");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़ॊ");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ॊ");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़ॊ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ऒ");}}else if(k.KKM(e,16400,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ङ");}}else if(k.KKM(e,16400,88)) {if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"्‌");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"X");}}else if(k.KKM(e,16400,89)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़ॆ");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ॆ");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ॆ");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱॆ");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴॆ");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़ॆ");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़ॆ");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़ॆ");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़ॆ");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़ॆ");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ॆ");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़ॆ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ठ");}}else if(k.KKM(e,16400,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ष");}}else if(k.KKM(e,16384,219)) {if(k.KFCM(1,t,['`'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ॾ");}else if(k.KFCM(1,t,['ड'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ड़");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ड");}}else if(k.KKM(e,16384,220)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"“");}}else if(k.KKM(e,16384,221)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़ॅ");}else if(k.KFCM(1,t,['`'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ॲ");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ॅ");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ॅ");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱॅ");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴॅ");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़ॅ");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़ॅ");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़ॅ");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़ॅ");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़ॅ");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ॅ");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़ॅ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ऍ");}}else if(k.KKM(e,16464,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ॠ");}}else if(k.KKM(e,16400,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"^");}}else if(k.KKM(e,16400,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"_");}}else if(k.KKM(e,16384,192)) {if(k.KFCM(1,t,['।'])){r=m=1;k.KDC(1,t);k.KO(-1,t,".");}else if(k.KFCM(1,t,['.'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"…");}else if(k.KFCM(1,t,['-'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"—");}else if(k.KFCM(1,t,['0'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"०");}else if(k.KFCM(1,t,['1'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"१");}else if(k.KFCM(1,t,['2'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"२");}else if(k.KFCM(1,t,['3'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"३");}else if(k.KFCM(1,t,['4'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"४");}else if(k.KFCM(1,t,['5'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"५");}else if(k.KFCM(1,t,['6'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"६");}else if(k.KFCM(1,t,['7'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"७");}else if(k.KFCM(1,t,['8'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"८");}else if(k.KFCM(1,t,['9'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"९");}else if(k.KFCM(1,t,['न'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"न्");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"`");}else if(1){r=m=1;k.KDC(0,t);k.KDO(-1,t,0);}}else if(k.KKM(e,16384,65)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़ा");}else if(k.KFCM(1,t,['`'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऄ");}else if(k.KFCM(1,t,['अ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"आ");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ा");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ा");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱा");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴा");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़ा");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़ा");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़ा");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़ा");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़ा");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ा");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़ा");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"अ");}}else if(k.KKM(e,16448,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ऒ");}}else if(k.KKM(e,16384,66)) {if(k.KFCM(1,t,['`'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ॿ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ब");}}else if(k.KKM(e,16384,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"च");}}else if(k.KKM(e,16448,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ॸ");}}else if(k.KKM(e,16384,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"द");}}else if(k.KKM(e,16384,69)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़े");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"े");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़े");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱे");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴे");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़े");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़े");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़े");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़े");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़े");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़े");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़े");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ए");}}else if(k.KKM(e,16448,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ॕ");}}else if(k.KKM(e,16384,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ट");}}else if(k.KKM(e,16384,71)) {if(k.KFCM(1,t,['`'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ॻ");}else if(k.KFCM(1,t,['ग'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ग");}}else if(k.KKM(e,16384,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ह");}}else if(k.KKM(e,16384,73)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़ि");}else if(k.KFCM(1,t,['इ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ई");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ि");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ि");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱि");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴि");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़ि");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़ि");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़ि");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़ि");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़ि");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ि");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़ि");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"इ");}}else if(k.KKM(e,16384,74)) {if(k.KFCM(1,t,['`'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ॼ");}else if(k.KFCM(1,t,['ज'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ज");}}else if(k.KKM(e,16448,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ॹ");}}else if(k.KKM(e,16384,75)) {if(k.KFCM(1,t,['क'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"क");}}else if(k.KKM(e,16384,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ल");}}else if(k.KKM(e,16384,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"म");}}else if(k.KKM(e,16384,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"न");}}else if(k.KKM(e,16384,79)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़ो");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ो");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ो");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱो");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴो");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़ो");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़ो");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़ो");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़ो");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़ो");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ो");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़ो");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ओ");}}else if(k.KKM(e,16384,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"प");}}else if(k.KKM(e,16384,81)) {if(k.KFCM(1,t,['़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"॰");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"़");}}else if(k.KKM(e,16384,82)) {if(k.KFCM(1,t,['र'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"र");}}else if(k.KKM(e,16384,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"स");}}else if(k.KKM(e,16384,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"त");}}else if(k.KKM(e,16384,85)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़ु");}else if(k.KFCM(1,t,['उ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऊ");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ु");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ु");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱु");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴु");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़ु");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़ु");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़ु");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़ु");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़ु");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ु");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़ु");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"उ");}}else if(k.KKM(e,16448,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ॶ");}}else if(k.KKM(e,16384,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"व");}}else if(k.KKM(e,16448,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ॵ");}}else if(k.KKM(e,16384,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ञ");}}if(m) {}else if(k.KKM(e,16384,88)) {if(k.KFCM(1,t,['न'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"न्‍");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"्");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"x");}}else if(k.KKM(e,16384,89)) {if(k.KFCM(1,t,['`'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ॺ");}else if(k.KFCM(1,t,['य'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"य");}}else if(k.KKM(e,16384,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"श");}}else if(k.KKM(e,16400,219)) {if(k.KFCM(1,t,['ढ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ढ");}}else if(k.KKM(e,16464,220)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ॎ");}}else if(k.KKM(e,16400,220)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"”");}}else if(k.KKM(e,16400,221)) {if(k.KFCM(2,t,[{t:'a',a:this.s16},'़'])){r=m=1;k.KDC(2,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"़ॉ");}else if(k.KFCM(1,t,[{t:'a',a:this.s16}])){r=m=1;k.KDC(1,t);k.KIO(-1,this.s16,1,t);k.KO(-1,t,"ॉ");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ॉ");}else if(k.KFCM(1,t,['ऱ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऱॉ");}else if(k.KFCM(1,t,['ऴ'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ऴॉ");}else if(k.KFCM(1,t,['ग़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ग़ॉ");}else if(k.KFCM(1,t,['ज़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ज़ॉ");}else if(k.KFCM(1,t,['ढ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ढ़ॉ");}else if(k.KFCM(1,t,['फ़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"फ़ॉ");}else if(k.KFCM(1,t,['य़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"य़ॉ");}else if(k.KFCM(1,t,['क़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"क़ॉ");}else if(k.KFCM(1,t,['ख़'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ख़ॉ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ऑ");}}else if(k.KKM(e,16400,192)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"~");}}return r;};}