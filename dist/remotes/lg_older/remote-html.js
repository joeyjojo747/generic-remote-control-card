function getRemoteStyle_lg_chepy_big(config) {
   
   const template = config.remote_template;
   const base_url = `/hacsfiles/generic-remote-control-card/remotes/${template}`;
    
  return `
    ha-card{
    	background-color:transparent;
    	box-shadow:var(--paper-material-elevation-0_-_box-shadow);
    }
    body {
	margin: 0;
	padding: 20px;
	font-family: "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif
}

.container {
	width: 360px;
	margin: 0 auto
}

#remote-control-lg_chepy_big {
	position: relative;
	background: url(${base_url}/lg_remote.png) no-repeat;
	width: 184px;
	height: 844px
}

#remote-control-lg_chepy_big h2,
#remote-control-lg_chepy_big span {
	position: absolute;
	left: 5000px
}

#remote-control-lg_chepy_big ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#power a,
#power2 a,
#volmin a,
#volplus a,
#mute a,
#source a,
#tv a,
#one a,
#two a,
#three a,
#four a,
#five a,
#six a,
#seven a,
#eight a,
#nine a,
#zero a,
#list a,
#qview a,
#section12 a,
#exit a,
#info a,
#guide a,
#netflix a,
#amazon a,
#channelup a,
#channeldown a,
#microphone a,
#settings a,
#menu a,
#back a,
#left a,
#right a,
#top a,
#bottom a,
#ok a {
	position: absolute;
	display: block
},
#tv a


#remote-control-lg_chepy_big li#power a {
	left: 15px;
	top: 61px;
	width: 49px;
	height: 49px;
	background: url(${base_url}/power.png) no-repeat
}

#remote-control-lg_chepy_big li#power a:hover {
	background-image: url(${base_url}/power_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-lg_chepy_big li#power2 a {
	left: 19px;
	top: 24px;
	width: 49px;
	height: 49px;
	background: url(${base_url}/power.png) no-repeat
}

#remote-control-lg_chepy_big li#power2 a:hover {
	background-image: url(${base_url}/power_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-lg_chepy_big li#source a {
	left: 94px;
	top: 85px;
	width: 30px;
	height: 35px;
	background: url(${base_url}/source.png) no-repeat
}

#remote-control-lg_chepy_big li#source a:hover {
	background-image: url(${base_url}/source_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-lg_chepy_big li#tv a {
	left: 129px;
	top: 85px;
	width: 30px;
	height: 35px;
	background: url(${base_url}/tv.png) no-repeat
}

#remote-control-lg_chepy_big li#tv a:hover {
	background-image: url(${base_url}/tv_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-lg_chepy_big li#exit a {
	width: 45px;
	height: 31px;
	left:116px;
	top: 573px;
	background: url(${base_url}/exit.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#info a {
	width: 45px;
	height: 31px;
	left:72px;
	top: 576px;
	background: url(${base_url}/info.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#guide a {
	width: 42px;
	height: 25px;
	left:27px;
	top: 433px;
	background: url(${base_url}/guide.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#one a {
	width: 46px;
	height: 38px;
	left: 19px;
	top: 135px;
	background: url(${base_url}/one.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#two a {
	width: 46px;
	height: 38px;
	left: 67px;
	top: 135px;
	background: url(${base_url}/two.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#three a {
	width: 46px;
	height: 38px;
	left: 115px;
	top: 135px;
	background: url(${base_url}/three.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#four a {
	width: 46px;
	height: 38px;
	left: 20px;
	top: 175px;
	background: url(${base_url}/four.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#five a {
	width: 46px;
	height: 38px;
	left: 68px;
	top: 175px;
	background: url(${base_url}/five.png) no-repeat 0 0px
}


#remote-control-lg_chepy_big li#six a {
	width: 46px;
	height: 38px;
	left: 115px;
	top: 175px;
	background: url(${base_url}/six.png) no-repeat 0 0px
}


#remote-control-lg_chepy_big li#seven a {
	width: 46px;
	height: 38px;
	left: 20px;
	top: 215px;
	background: url(${base_url}/seven.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#eight a {
	width: 46px;
	height: 38px;
	left: 68px;
	top: 215px;
	background: url(${base_url}/eight.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#nine a {
	width: 46px;
	height: 38px;
	left: 115px;
	top: 215px;
	background: url(${base_url}/nine.png) no-repeat 0 0px
}


#remote-control-lg_chepy_big li#zero a {
	width: 46px;
	height: 38px;
	left: 68px;
	top: 252px;
	background: url(${base_url}/zero.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#volplus a {
	width: 46px;
	height: 38px;
	left: 21px;
	top: 312px;
	background: url(${base_url}/volplus.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#volmin a {
	width: 46px;
	height: 38px;
	left: 21px;
	top: 376px;
	background: url(${base_url}/volmin.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#menu a {
	width: 42px;
	height: 25px;
	left: 115px;
	top: 433px;
	background: url(${base_url}/menu.png) no-repeat 0px 0px;
}

#remote-control-lg_chepy_big li#mute a {
	width: 42px;
	height: 25px;
	left: 72px;
	top: 389px;
	background: url(${base_url}/mute.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#list a {
	width: 46px;
	height: 38px;
	left: 23px;
	top: 252px;
	background: url(${base_url}/list.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#qview a {
	width: 46px;
	height: 38px;
	left: 115px;
	top: 252px;
	background: url(${base_url}/qview.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#section12 a {
	width: 15px;
	height: 16px;
	left: 107px;
	top: 162px;
	background: url(${base_url}/section12.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#back a {
    width: 45px;
    height: 31px;
	left: 25px;
	top: 572px;
    background: url(${base_url}/back.png) no-repeat 0px 0px;
}

#remote-control-lg_chepy_big li#left a {
	width: 28px;
	height: 26px;
	left: 36px;
	top: 503px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#right a {
	width: 28px;
	height: 26px;
	left: 121px;
	top: 503px;
	background: url(${base_url}/right.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#top a {
	width: 34px;
	height: 24px;
	left: 76px;
	top: 460px;
	background: url(${base_url}/top.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#bottom a {
	width: 34px;
	height: 24px;
	left: 76px;
	top: 549px;
	background: url(${base_url}/bottom.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#netflix a {
	width: 36px;
	height: 23px;
	left: 17px;
	top: 418px;
	background: url(${base_url}/netflix.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#amazon a {
	width: 36px;
	height: 23px;
	left: 105px;
	top: 418px;
	background: url(${base_url}/amazon.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#channelup a {
	width: 46px;
	height: 38px;
	left: 116px;
	top: 312px;
	background: url(${base_url}/channelup.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#channeldown a {
	width: 46px;
	height: 38px;
	left: 116px;
	top: 376px;
	background: url(${base_url}/channeldown.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#microphone a {
	width: 24px;
	height: 22px;
	left: 70px;
	top: 242px;
	background: url(${base_url}/microphone.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#settings a {
	width: 15px;
	height: 15px;
	left: 118px;
	top: 269px;
	background: url(${base_url}/settings.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#ok a {
	width: 48px;
	height: 47px;
	left: 68px;
	top: 494px;
	background: url(${base_url}/ok.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#exit a:hover {
	background: url(${base_url}/exit_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#info a:hover {
	background: url(${base_url}/info_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#guide a:hover {
	background: url(${base_url}/guide_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#one a:hover {
	background: url(${base_url}/one_over.png) no-repeat 0 0px
}


#remote-control-lg_chepy_big li#two a:hover {
	background: url(${base_url}/two_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#three a:hover {
	background: url(${base_url}/three_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#four a:hover {
	background: url(${base_url}/four_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#five a:hover {
	background: url(${base_url}/five_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#six a:hover {
	background: url(${base_url}/six_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#seven a:hover {
	background: url(${base_url}/seven_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#eight a:hover {
	background: url(${base_url}/eight_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#nine a:hover {
	background: url(${base_url}/nine_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#zero a:hover {
	background: url(${base_url}/zero_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#volplus a:hover {
	background: url(${base_url}/volplus_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#volmin a:hover {
	background: url(${base_url}/volmin_over.png) no-repeat 0 0px
}

#remote-control-lg_chepy_big li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#list a:hover {
	background: url(${base_url}/list_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#qview a:hover {
	background: url(${base_url}/qview_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#section12 a:hover {
	background: url(${base_url}/section12_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#back a:hover {
	background: url(${base_url}/back_over.png) no-repeat 0px 0px;
}

#remote-control-lg_chepy_big li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#top a:hover {
	background: url(${base_url}/top_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#bottom a:hover {
	background: url(${base_url}/bottom_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#netflix a:hover {
	background: url(${base_url}/netflix.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#amazon a:hover {
	background: url(${base_url}/amazon.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#channelup a:hover {
	background: url(${base_url}/channelup_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#channeldown a:hover {
	background: url(${base_url}/channeldown_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#microphone a:hover {
	background: url(${base_url}/microphone_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#settings a:hover {
	background: url(${base_url}/settings_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#power2 a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}

#remote-control-lg_chepy_big li#ok a:hover {
	background: url(${base_url}/ok_over.png) no-repeat 0px 0px
}
  `;
}

function getRemoteHtml_lg_chepy_big(config){return `
       <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-${config.remote_template}">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton-${config.remote_template}"><a href="#" title="Power"><span>Power</span></a></li>
					<li id="power2" class="myButton-${config.remote_template}"><a href="#" title="Power2"><span>Power2</span></a></li>
					<li id="volmin" class="myButton-${config.remote_template}"><a href="#" title="Vol Min"><span>Vol Min</span></a></li>
					<li id="volplus" class="myButton-${config.remote_template}"><a href="#" title="Vol Plus"><span>Vol Plus</span></a></li>
					<li id="mute" class="myButton-${config.remote_template}"><a href="#" title="Vol Mute"><span>Vol Mute</span></a></li>
					<li id="source" class="myButton-${config.remote_template}"><a href="#" title="Source"><span>Source</span></a></li>
					<li id="tv" class="myButton-${config.remote_template}"><a href="#" title="TV"><span>TV</span></a></li>
				</ul>

				<ul>
					<li id="list"  class="myButton-${config.remote_template}""><a href="#" title="list"><span>+list</span></a></li>
					<li id="qview"  class="myButton-${config.remote_template}""><a href="#" title="Quick view"><span>+qview</span></a></li>
					<li id="section12"  class="myButton-${config.remote_template}""><a href="#" title="Section 12"><span>Section 12</span></a></li>
				</ul>

				<ul>
					<li class="myButton-${config.remote_template}" id="exit"><a href="#" title="exit"><span>exit</span></a></li>
					<li class="myButton-${config.remote_template}" id="info"><a href="#" title="info"><span>info</span></a></li>
					<li class="myButton-${config.remote_template}" id="guide"><a href="#" title="guide"><span>guide</span></a></li>
					<li class="myButton-${config.remote_template}" id="one"><a href="#" title="one"><span>one</span></a></li>
					<li class="myButton-${config.remote_template}" id="two"><a href="#" title="two"><span>two</span></a></li>
					<li class="myButton-${config.remote_template}" id="three"><a href="#" title="three"><span>three</span></a></li>
					<li class="myButton-${config.remote_template}" id="four"><a href="#" title="four"><span>four</span></a></li>
					<li class="myButton-${config.remote_template}" id="five"><a href="#" title="five"><span>five</span></a></li>
					<li class="myButton-${config.remote_template}" id="six"><a href="#" title="six"><span>six</span></a></li>
					<li class="myButton-${config.remote_template}" id="seven"><a href="#" title="seven"><span>seven</span></a></li>
					<li class="myButton-${config.remote_template}" id="eight"><a href="#" title="eight"><span>eight</span></a></li>
					<li class="myButton-${config.remote_template}" id="nine"><a href="#" title="nine"><span>nine</span></a></li>
					<li class="myButton-${config.remote_template}" id="zero"><a href="#" title="zero"><span>zero</span></a></li>
					<li class="myButton-${config.remote_template}" id="netflix"><a href="#" title="netflix"><span>netflix</span></a></li>
					<li class="myButton-${config.remote_template}" id="amazon"><a href="#" title="amazon"><span>amazon</span></a></li>
					<li class="myButton-${config.remote_template}" id="channelup"><a href="#" title="channel up"><span>channelup</span></a></li>
					<li class="myButton-${config.remote_template}" id="channeldown"><a href="#" title="channel down"><span>channeldown</span></a></li>
					<li class="myButton-${config.remote_template}" id="microphone"><a href="#" title="microphone"><span>microphone</span></a></li>
					<li class="myButton-${config.remote_template}" id="settings"><a href="#" title="settings"><span>settings</span></a></li>
					<li class="myButton-${config.remote_template}" id="menu"><a href="#" title="Menu"><span>Menu</span></a></li>
					<li class="myButton-${config.remote_template}" id="back"><a href="#" title="Go back"><span>back</span></a></li>
					<li class="myButton-${config.remote_template}" id="left"><a href="#" title="Left"><span>Left</span></a></li>
					<li class="myButton-${config.remote_template}" id="right"><a href="#" title="right"><span>right</span></a></li>
					<li class="myButton-${config.remote_template}" id="top"><a href="#" title="Top"><span>Top</span></a></li>
					<li class="myButton-${config.remote_template}" id="bottom"><a href="#" title="Bottom"><span>Bottom</span></a></li>
					<li class="myButton-${config.remote_template}" id="ok"><a href="#" title="OK"><span>OK</span></a></li>
				</ul>
			</div>	
		</div>

`;
}