(function() {

	'use strict';

	/**
	 * @ngdoc function
	 * @name resumeApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the resumeApp
	 */
	angular.module('resumeApp')
	  	.controller('MainCtrl', function ($http, $q, $scope) {


	  		$scope.darkreader = {
	  			id: "darkreader",
	  			changeVar: "darkOp",
	  			txt: "Dark Reader",
	  			skill1: "Data Binding",
	  			skill2: "Templating",
	  			skill3: "Routing",
	  			skill4: "MVC/MVW",
	  			skill1Hide: "true",
	  			skill2Hide: "true",
	  			skill3Hide: "true",
	  			skill4Hide: "true",
	  			nameHide: "false",
	  			nameTxt: "Dark Reader",
	  			nameClass: "block-name-def",
	  			paraHide: "false",
	  			paraTxt: "A chrome extension that inverts brightness of web pages and aims to reduce eyestrain while browsing the web.",
	  		};

	  		$scope.tmtheme = {
	  			id: "tmtheme",
	  			changeVar: "themeOp",
	  			txt: "TmTheme",
	  			skill1: "Data Binding",
	  			skill2: "Templating",
	  			skill3: "Routing",
	  			skill4: "MVC/MVW",
	  			skill1Hide: "true",
	  			skill2Hide: "true",
	  			skill3Hide: "true",
	  			skill4Hide: "true",
	  			nameHide: "false",
	  			nameTxt: "TmTheme Editor",
	  			nameClass: "block-name-tm",
	  			paraHide: "false",
	  			paraTxt: "A color scheme editor for SublimeText, Textmate and other text editors. It allows you to edit tmtheme files easier and faster.",
	  		};

	  		$scope.angular = {
	  			id: "angular",
	  			changeVar: "angOp",
	  			txt: "Angular",
	  			skill1: "Data Binding",
	  			skill2: "Templating",
	  			skill3: "Routing",
	  			skill4: "MVC/MVW",
	  			skill1Hide: "false",
	  			skill2Hide: "false",
	  			skill3Hide: "false",
	  			skill4Hide: "false",
	  			nameHide: "false",
	  			nameTxt: "Angular",
	  			nameClass: "block-name-def"
	  		};

	  		$scope.jQuery = {
	  			id: "jquery",
	  			changeVar: "jquOp",
	  			txt: "JQuery",
	  			skill1: "DOM Manipulation",
	  			skill2: "AJAX",
	  			skill3: "",
	  			skill4: "",
	  			skill1Hide: "false",
	  			skill2Hide: "false",
	  			skill3Hide: "true",
	  			skill4Hide: "true",
	  			nameHide: "false",
	  			nameTxt: "JQuery",
	  			nameClass: "block-name-def"
	  		};

	  		$scope.bootstrap = {
	  			id: "bootstrap",
	  			changeVar: "bootOp",
	  			txt: "Bootstrap",
	  			skill1: "Responsive Design",
	  			skill2: "",
	  			skill3: "",
	  			skill4: "",
	  			skill1Hide: "false",
	  			skill2Hide: "true",
	  			skill3Hide: "true",
	  			skill4Hide: "true",
	  			nameHide: "false",
	  			nameTxt: "Bootstrap",
	  			nameClass: "block-name-def"
	  		};

	  		$scope.git = {
	  			id: "git",
	  			changeVar: "gitOp",
	  			txt: "Git",
	  			skill1: "Version Control",
	  			skill2: "Github",
	  			skill3: "",
	  			skill4: "",
	  			skill1Hide: "false",
	  			skill2Hide: "false",
	  			skill3Hide: "true",
	  			skill4Hide: "true",
	  			nameHide: "false",
	  			nameTxt: "Git",
	  			nameClass: "block-name-def"
	  		};

	  		$scope.yeoman = {
	  			id: "yeoman",
	  			changeVar: "yeoOp",
	  			txt: "Yeoman",
	  			skill1: "Yeoman Workflow",
	  			skill2: "Scaffolding",
	  			skill3: "",
	  			skill4: "",
	  			skill1Hide: "false",
	  			skill2Hide: "false",
	  			skill3Hide: "true",
	  			skill4Hide: "true",
	  			nameHide: "false",
	  			nameTxt: "Yeoman",
	  			nameClass: "block-name-def"
	  		};

	  		$scope.grunt = {
	  			id: "grunt",
	  			changeVar: "gruntOp",
	  			txt: "Grunt",
	  			skill1: "Compiling",
	  			skill2: "Minification",
	  			skill3: "Linting",
	  			skill4: "Livereload",
	  			skill1Hide: "false",
	  			skill2Hide: "false",
	  			skill3Hide: "false",
	  			skill4Hide: "false",
	  			nameHide: "false",
	  			nameTxt: "Grunt",
	  			nameClass: "block-name-def"
	  		};

	  		$scope.bower = {
	  			id: "bower",
	  			changeVar: "bowOp",
	  			txt: "Bower",
	  			skill1: "Package Managing",
	  			skill2: "",
	  			skill3: "",
	  			skill4: "",
	  			skill1Hide: "false",
	  			skill2Hide: "true",
	  			skill3Hide: "true",
	  			skill4Hide: "true",
	  			nameHide: "false",
	  			nameTxt: "Bower",
	  			nameClass: "block-name-def"
	  		};

	  		$scope.sass = {
	  			id: "sass",
	  			changeVar: "sassOp",
	  			txt: "Sass",
	  			skill1: "Simple CSS Syntax",
	  			skill2: "Variables",
	  			skill3: "Inheritance",
	  			skill4: "",
	  			skill1Hide: "false",
	  			skill2Hide: "false",
	  			skill3Hide: "false",
	  			skill4Hide: "true",
	  			nameHide: "false",
	  			nameTxt: "Sass",
	  			nameClass: "block-name-def"
	  		};

	  		$scope.cscript = {
	  			id: "cscript",
	  			changeVar: "cscOp",
	  			txt: "CoffeeScript",
	  			skill1: "Simple JS Syntax",
	  			skill2: "",
	  			skill3: "",
	  			skill4: "",
	  			skill1Hide: "false",
	  			skill2Hide: "true",
	  			skill3Hide: "true",
	  			skill4Hide: "true",
	  			nameHide: "false",
	  			nameTxt: "CoffeeScript",
	  			nameClass: "block-name-def"
	  		};

	  		$scope.gimp = {
	  			id: "gimp",
	  			changeVar: "gimpOp",
	  			txt: "Gimp",
	  			skill1: "Image Editing",
	  			skill2: "Bitmapping",
	  			skill3: "",
	  			skill4: "",
	  			skill1Hide: "false",
	  			skill2Hide: "false",
	  			skill3Hide: "true",
	  			skill4Hide: "true",
	  			nameHide: "false",
	  			nameTxt: "Gimp",
	  			nameClass: "block-name-def"
	  		};

	  		$scope.balsamiq = {
	  			id: "balsamiq",
	  			changeVar: "balOp",
	  			txt: "Balsamiq",
	  			skill1: "Wireframing",
	  			skill2: "Mockups",
	  			skill3: "",
	  			skill4: "",
	  			skill1Hide: "false",
	  			skill2Hide: "false",
	  			skill3Hide: "true",
	  			skill4Hide: "true",
	  			nameHide: "false",
	  			nameTxt: "Balsamiq",
	  			nameClass: "block-name-def"
	  		};

	  		$scope.d3 = {
	  			id: "d3",
	  			changeVar: "d3Op",
	  			txt: "D3",
	  			skill1: "Data Visualization",
	  			skill2: "SVG Manipulation",
	  			skill3: "",
	  			skill4: "",
	  			skill1Hide: "false",
	  			skill2Hide: "false",
	  			skill3Hide: "true",
	  			skill4Hide: "true",
	  			nameHide: "false",
	  			nameTxt: "D3",
	  			nameClass: "block-name-def"
	  		};

		  	function add(a, b) {
		      	return a + b;
		  	}

		  	var githubGet = 'https://api.github.com';
		  	var commitContainer = [];
		  	var repoContainer = [];
		  	var commitTotal = 0;
		  	var commitOwnerTotal = [];
		  	var commitOwnerWeekly = [];
		  	var commitDaily = [];

		  	function pushCalledCommits(res, container) {
		  		
		  		for (let i=0; i < res.length; i++) {

		  			if (res[i].total > 0) {

		  				for (let j=0; j < res[i].days.length; j++) {
		  					container.push(res[i].days[j]);

		  				}
		  			}
		  		}

		  		return container.reduce(add, 0);

		  	}

		  	function getGithubStuff() {
		  		return $http.get(githubGet + '/users/InvalidPleb/repos')
			  		.then(function(res){
			  			pushCalledRepo(res.data);
			  			return getCommits(repoContainer[0], 0, repoContainer.length);
			  		});
		  	}
		  	
		  	function getCommits (repo, repoNum, maxRepos) {
		  		return $http.get(githubGet +'/repos/' + repo + '/stats/commit_activity')
		  			.then(function(res){
		  				commitDaily.push(res.data);
			  			repoNum++;

			  			if (repoNum < maxRepos) {
			  				return getCommits(repoContainer[repoNum], repoNum, maxRepos);
			  			}
			  		});
		  	}

		  	function pushCalledRepo (res) {
		  		for (let i = 0; i < res.length; i++) {
		  			repoContainer.push(res[i].full_name);
		  		}

		  	}


		  	// -------------- Graph -------------- //

		  	var svgContainer = d3.select(".animation-container")
		  		.append("svg")
				.attr("width", 400)
				.attr("height", 500)
				.style("position", "relative")
				.style("right", "132px");

			var pie = d3.layout.pie()
				.value(function (d) {
					return d;
			});

			var colorObj = {
				0: [38, 53, 138],
				1: [188, 149, 41],
				2: [201, 177, 0],
				3: [142, 114, 31],
				4: [160, 140, 67],
				5: [10, 144, 67],
				6: [47, 177, 122],
				7: [149, 199, 111],
				8: [184, 209, 58],
				9: [229, 119, 55],
			};

			var colorArr = [0,105, 0];

			function arc (inRad, outRad, sAng, eAng) {

				return d3.svg.arc()
					.innerRadius(inRad)
				    .outerRadius(outRad)
				    .startAngle(sAng)
				    .endAngle(eAng);

			}

			function outerRing (sAng, eAng, color, data, midData, i) {

				if (i < 52) {

					if (sAng === -1 && eAng === 5.5) {
						sAng++;
						eAng++;

					} else {
						sAng = sAng + 6.42;
						eAng = eAng + 6.42;
					}

					let color1 = color[0] + (data[i] * 13);
					let color2 = color[1] + (data[i] * 13);
					let color3 = color[2] + (data[i] * 13);
					let alpha = (data[i] * 0.1) + 0.05;
					let dayRing;
					let midDataInd = midData[i];

					let g = svgContainer.append('svg:g');

					let div = d3.select(".animation-container").append("div")	
						.attr("class", "tooltip1")
						.style('position','absolute')	
						.style("opacity", 0)
						.html(function() {
							return "<p class=\"day-tooltip-title\">Week " + (i + 1) + "</p>" +
								"<p class=\"day-tooltip-label\"> &nbsp; &nbsp; Day &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Commits</p>" +
								"<div class=\"day-tooltip-container\">" + 
									"<p class=\"day-tooltip\">S|" + midDataInd[0] + "</p>" +
									"<p class=\"day-tooltip\">M|" + midDataInd[1] + "</p>" +
									"<p class=\"day-tooltip\">T|" + midDataInd[2] + "</p>" +
									"<p class=\"day-tooltip\">W|" + midDataInd[3] + "</p>" +
									"<p class=\"day-tooltip\">T|" + midDataInd[4] + "</p>" +
									"<p class=\"day-tooltip\">F|" + midDataInd[5] + "</p>" +
									"<p class=\"day-tooltip\">S|" + midDataInd[6] + "</p>" +
								"</div>";	
					});

					g.append("path")
					    .attr("d", arc(170, 200, (sAng * Math.PI / 180), (eAng * Math.PI / 180)))
					    .attr("transform", "translate(200,250)")
					    .style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")")
					    .style("position", "relative")
					    .style("z-index", "2")
					    .on("mouseover", function (d) {
						    d3.select(this).style("fill", "rgb(89, 74, 41)");
						    div.style("left", ((d3.select(this).attr("cx") + 492) + "px"))
		            			.style("top", ((d3.select(this).attr("cy") + 174) + "px"));
						    div.transition()		
		            			.duration(50)		
		            			.style("opacity", 0.9);
		            		
		            		dayRing = middleRing(0, 50, colorArr, midDataInd);

		            		for (let j = 0; j < dayRing.length; j++) {
		            			dayRing[j].transition()		
		            			.duration(200)		
		            			.style("opacity", 0.9);
		            		}
		   
						})
						.on("mouseout", function (d) {

						    d3.select(this).style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")");
						    div.transition()		
		            			.duration(50)		
		            			.style("opacity", 0);
		            		for (let j = 0; j < dayRing.length; j++) {
		            			dayRing[j].transition()		
		            			.duration(200)		
		            			.style("opacity", 0.1);
		            			dayRing[j].remove();
		            		}	
						});

					sAng = sAng + 0.5;
					eAng = eAng + 0.5;
					i++;

					return outerRing(sAng, eAng, colorArr, data, midData, i);
				}
			}

			function stylePos(element, top, left) {
				return element.style("top", (top) + "px")
					.style("left", (left) + "px");
			}

			function innerRing (data, nameArr, color, i){

				if (i < data.length) {

					let repoName = nameArr[i].slice(12,nameArr[i].length);

					let tooltip = d3.select(".d3-container")
						.append("div")
					    .attr("class", "tooltip")				
					    .style("opacity", 0);

					let pieD = pie(data);
					let sAng = pieD[i].startAngle;
					let eAng = pieD[i].endAngle;

					let alpha = 0.6;

					svgContainer.append("path")
					    .attr("d", arc(80, 140, sAng, eAng))
					    .attr("transform", "translate(200,250)")
					    .style("fill", "rgba(" + color + "," + alpha + ")")
					    .style("position", "relative")
					    .style("z-index", "2")
					    .style("box-shadow", "0px 0px 9px 1px rgba(0,0,0,0.85)")
					    .on("mouseover", function () {
					    	tooltip.style("opacity", 1)
							.style("pointer-events", "none")
							.style("left", (300) + "px")
                			.style("top", (-500) + "px")
                			.html(function(d) {
							    return "<p>" + repoName + "</p>" + "<p>" + data[i - 1] + " commits</p>";
							});
                			
							if (i === 1) {
								stylePos(tooltip, -480, 420);
							}
							if (i === 2) {
								stylePos(tooltip, -500, 380);
							}
							if (i === 3) {
								stylePos(tooltip, -425, 680);
							}
							if (i === 4) {
								stylePos(tooltip, -450, 320);
							}
							if (i === 5) {
								stylePos(tooltip, -700, 480);
							}
							if (i === 6) {
								stylePos(tooltip, -750, 520);
							}
						   	
						    d3.select(this).style("fill", "rgba(" + color + "," + (alpha + 0.3) + ")");
						}).on("mouseout", function () {
							tooltip.style("opacity", 0);
							tooltip.style("pointer-events", "none");
						   	
						    d3.select(this).style("fill", "rgba(" + color + "," + alpha + ")");
						});

					i++;

					return innerRing(data, repoContainer, colorObj[i], i);
				}
			}
			
			function middleRing(sAng, eAng, color, data) {

				let ringCont = [];

				for (let i = 0; i <= 6; i++) {

					sAng = sAng + 50;
					eAng = eAng + 50;

					let color1 = color[0] + (data[i] * 50);
					let color2 = color[1] + (data[i] * 50);
					let color3 = color[2] + (data[i] * 50);
					let alpha = (data[i] * 0.2) + 0.05;

					let ring = svgContainer.append("path")
					    .attr("d", arc(145, 165, (sAng * Math.PI / 180), (eAng * Math.PI / 180)))
					    .attr("transform", "translate(200,250)")
					    .style("fill", "rgba(" + color1 + "," + color2 + "," + color3 + "," + alpha + ")")
					    .style("position", "relative")
						.style("z-index", "2")
						.style("opacity", 0.3);

						sAng = sAng + 1.5;
						eAng = eAng + 1.5;

					ringCont.push(ring);
				}

				return ringCont;
			}

			function getDayCommits(inputArr) {

	  			let inputArrSlice = inputArr.slice(1, 5);
		  		let weekCurrTotal = [];
		  		let outputDays = [];
		  		let outputRepos = [];

		  		for (let i=0; i < inputArrSlice.length; i++) {

		  			let weekCurr = inputArrSlice[i];
		  			weekCurrTotal[i] = [];

		  			for (let j=0; j < 52; j++) {

		  				if (outputDays[j] === undefined) {
		  					outputDays[j] = [];
		  					outputDays[j].push(weekCurr[j].days);
		  				} else {
		  					outputDays[j].push(weekCurr[j].days);
		  				}
		  				weekCurrTotal[i].push(weekCurr[j].total);
		  			}
		  			outputRepos[i] = (weekCurrTotal[i].reduce(add, 0));
		  		}

		  		return [outputRepos, outputDays];
	  		}

	  		function sumDayCommits(inputArr) {

		  		let daySums = [];

		  		for (let i=0; i < inputArr.length; i++) {

		  			let weekCurr = inputArr[i];

		  			if (daySums[i] === undefined) {

		  				daySums[i] = [];
		  			}

		  			for (let j=0; j < weekCurr.length; j++) {

		  				let dayCurr = weekCurr[j];

		  				for (let l=0; l < dayCurr.length; l++) {

		  					daySums[i].push(dayCurr[l]);
		  				}
		  			}
		  		}
		  		
		  		return daySums;
	  		}

	  		function parseCommits(inputArr) {

	  			let dayArr = [];
	  			let weekCommits = [];
		  		let daySumsCurr = [];
		  		let dayArrCurr = [];

		  		let j = 0;

		  		for (let i=0; (i < inputArr.length); i++) {

		  			if (dayArr[i] === undefined) {

		  				dayArr[i] = [];

		  			}

		  			daySumsCurr = inputArr[i];
		  			weekCommits.push(inputArr[i].reduce(add, 0));

		  			for (let l=0; l < daySumsCurr.length; l++) {

		  				if ((l + 1) % 7 === 0) {

			  				j = 0;

			  			} else {

			  				j++;
			  			}

		  				dayArrCurr = dayArr[i];

		  				if (dayArrCurr[j] === undefined) {

		  					dayArrCurr[j] = daySumsCurr[l];

		  				} else {

		  					dayArrCurr[j] = (dayArrCurr[j] + daySumsCurr[l]);

		  				}
		  			}
		  		}
		  		
		  		return [weekCommits, dayArr];
	  		}

			var calls = getGithubStuff();
		  	
		  	$q.all([calls]).then(function(){

		  		var gotDayCommits = getDayCommits(commitDaily);

		  		var repoCommits = gotDayCommits[0];
		  		var dayCommits = gotDayCommits[1];

		  		repoCommits.push(1);
		  		repoCommits.unshift(3);

		  		var daySums = sumDayCommits(dayCommits);
		  		var gotParsedCommits = parseCommits(daySums);

		  		outerRing(-1, 5.5, [0,105, 0], gotParsedCommits[0], gotParsedCommits[1], 0);
				middleRing(0, 50, [0,105, 0], [1,1,1,1,1,1,1]);
				innerRing(repoCommits, repoContainer, colorObj[0], 0);

		  	});

	});
})();
