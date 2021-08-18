function decimalAdjust(type, value, exp) {
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }

  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
}

if (!Math.round10) {
  Math.round10 = function (value, exp) {
    return decimalAdjust('round', value, exp);
  };
}

var studentData = {},
    educatorData = {},
    surveyData,
    chartMargin = {
  top: 40,
  right: 0,
  bottom: 90,
  left: 0
},
    rx = 5,
    ry = 5;

function setChartContainerHeight(containerID, ratio) {
  var container = d3.select("#" + containerID),
      width = container.node().clientWidth;
  container.style("height", width * ratio + "px");
}

let arc = (r, sign) => r ? `a${r * sign[0]},${r * sign[1]} 0 0 1 ${r * sign[2]},${r * sign[3]}` : "";

function roundedRect(x, y, width, height, r) {
  r = [Math.min(r[0], height, width), Math.min(r[1], height, width), Math.min(r[2], height, width), Math.min(r[3], height, width)];
  return `M${x + r[0]},${y}h${width - r[0] - r[1]}${arc(r[1], [1, 1, 1, 1])}v${height - r[1] - r[2]}${arc(r[2], [1, 1, -1, 1])}h${-width + r[2] + r[3]}${arc(r[3], [1, 1, -1, -1])}v${-height + r[3] + r[0]}${arc(r[0], [1, 1, 1, -1])}z`;
}

function wrap(text, width) {
  text.each(function () {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1,
        // ems
    y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");

    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));

      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}

function noDataWrap(text, width) {
  text.each(function () {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1,
        // ems
    y = text.attr("y"),
        x = text.attr("x"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", 0);

    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));

      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word]; //   console.log("try this", lineNumber, lineHeight, dy);

        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * 25).text(word);
      }
    }
  });
}

window.xScales = {};
window.yScales = {};

var buildBarChart = (containerID, data) => {
  console.log("buildBarChart", containerID, data);
  var container = d3.select("#" + containerID),
      width = container.node().clientWidth,
      height = container.node().clientHeight,
      isStudentChart = container.attr("class").indexOf('educators') === -1;
  var margin = {
    top: 40,
    right: 0,
    bottom: 60,
    left: 0
  },
      innerWidth = width - chartMargin.left - chartMargin.right,
      innerHeight = height - chartMargin.top - chartMargin.bottom;
  var xScale = d3.scaleBand().domain(data.map(d => d.label)).range([margin.left, innerWidth - margin.right]).padding(0.2);
  window.xScales[containerID] = xScale;
  var yScale = d3.scaleLinear().domain([0, d3.max(data, function (d) {
    return d.percentage;
  })]).nice().range([innerHeight, 0]);
  window.yScales[containerID] = yScale;
  var tip = d3.tip().attr("class", "d3-tip").html((EVENT, d) => {
    return d.value;
  });
  var svg = container.append('svg').attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  svg.call(tip);
  var defs = svg.append("defs"),
      greenGrad = defs.append('linearGradient').attr("id", containerID + "-green-gradient").attr("gradientTransform", "rotate(90)"),
      blueGrad = defs.append('linearGradient').attr("id", containerID + "-blue-gradient").attr("gradientTransform", "rotate(90)");
  blueGrad.append("stop").attr("offset", "5%").attr("stop-color", "#4FC7F3");
  blueGrad.append("stop").attr("offset", "95%").attr("stop-color", "#3CAFE3");
  greenGrad.append("stop").attr("offset", "5%").attr("stop-color", "#A9E25D");
  greenGrad.append("stop").attr("offset", "95%").attr("stop-color", "#A2CD6A");
  var rx = 5,
      ry = 5;
  var gradientId = "url(#" + containerID + (isStudentChart ? "-blue-gradient" : "-green-gradient") + ")";
  var bars = svg.selectAll(".bar").data(data).enter().append("g");
  bars.append('path').attr("class", "bar").attr("fill", gradientId).attr("d", d => roundedRect(xScale(d.label), // yScale(d.percentage),  //commented out for rendering zero value bars to animate to actual values
  yScale(0.1), xScale.bandwidth(), // yScale(0) - yScale(d.percentage),  //commented out for rendering zero value bars to animate to actual values
  yScale(0) - yScale(0.1), // 0,
  [10, 10, 0, 0]
  /* corner values of bar paths */
  )).on('mouseover', tip.show).on('mouseout', tip.hide);
  bars.append("text").text(function (d) {
    // return d.percentage + "%";
    return percentageText(d.percentage);
  }).attr("class", "bar-label").attr("x", function (d) {
    return xScale(d.label) + xScale.bandwidth() / 2;
  }).attr("y", function (d) {
    return yScale(d.percentage) - 23;
  }) // .attr("font-family" , "sans-serif")
  .attr("text-anchor", "middle").style("opacity", 0);
  bars.append('path').attr("class", "bar-label-triangle").attr("d", d3.symbol().type(d3.symbolTriangle).size(80)).attr("fill", "#FBD431").attr("transform", d => {
    return "translate(" + (xScale(d.label) + xScale.bandwidth() / 2) + "," + (yScale(d.percentage) - 14) + ") rotate(60,0,0)";
  }).style("opacity", 0);

  var xAxis = g => g.attr("transform", `translate(0,${innerHeight})`).call(d3.axisBottom(xScale).tickFormat(label => label).tickSize(0).tickPadding(15));

  svg.append("g").attr("class", "x axis").attr("transform", `translate(0,${innerHeight})`).call(xAxis).selectAll(".tick text").call(wrap, xScale.bandwidth());
  svg.append("g").append("text").attr("class", "no-data-text").style("opacity", 0).text(function () {
    if (isStudentChart) {
      return "No PreK—20 students were reached at this level by the STEM BP projects that reported participant data for the 2019-20 school year.";
    } else {
      return "No educators were reached at this level by the STEM BP projects that reported participant data for the 2019-20 school year.";
    }
  }).attr("x", "50%").attr("y", innerHeight * .25).call(noDataWrap, 400);
  setTimeout(() => {
    updatechart(containerID, data);
  }, 750);
};

var updatechart = (containerID, data) => {
  var container = d3.select("#" + containerID),
      width = container.node().clientWidth,
      height = container.node().clientHeight;
  var margin = {
    top: 40,
    right: 0,
    bottom: 60,
    left: 0
  };
  var bars = container.selectAll('.bar'),
      startData = bars.data();
  var xScale = window.xScales[containerID],
      yScale = window.yScales[containerID];
  var maxPercentage = d3.max(data, function (d) {
    return d.percentage;
  });

  if (maxPercentage > 0) {
    yScale.domain([0, maxPercentage]).nice();
  }

  if (maxPercentage > 0) {
    container.select(".no-data-text").transition().duration(200).style("opacity", 0);
  }

  var barLabels = container.selectAll(".bar-label").data(data).transition().duration(250).style("opacity", 0).on("end", function () {
    d3.select(this).text(function (d) {
      // return d.percentage + "%";
      return percentageText(d.percentage);
    }).attr("y", function (d) {
      return yScale(d.percentage) - 18;
    });
  });
  var barTriangles = container.selectAll(".bar-label-triangle").data(data).transition().duration(250).style("opacity", 0).on("end", function () {
    d3.select(this).attr("transform", d => {
      return "translate(" + (xScale(d.label) + xScale.bandwidth() / 2) + "," + (yScale(d.percentage) - 10) + ") rotate(60,0,0)";
    });
  });
  bars.data(data).transition().delay(250).duration(1000).attr("d", d => roundedRect(xScale(d.label), yScale(d.percentage > 0 ? d.percentage : 0.001), //roundedRect paths don't like zero values on transitions
  xScale.bandwidth(), yScale(0) - yScale(d.percentage > 0 ? d.percentage : 0.001), //roundedRect paths don't like zero values on transitions
  [10, 10, 0, 0]
  /* corner values of bar paths */
  )); //adjust labels

  barLabels.transition().delay(1200).duration(250).style("opacity", 1);
  barTriangles.transition().delay(1200).duration(250).style("opacity", 1);

  if (maxPercentage === 0) {
    container.select(".no-data-text").transition().delay(1200).duration(250).style("opacity", 1);
  } // axisLabels.transition()
  //     .delay(1000)
  //     .duration(250)
  //     .style("opacity", 1)

};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function populateTable(group, dataSet, data) {
  var total = 0;
  data.forEach(function (d) {
    total += d.value;
    d.value = numberWithCommas(d.value);
  });
  total = numberWithCommas(total);
  var string = dataSet;
  var tableData = {
    data: data,
    dataSet: string.charAt(0).toUpperCase() + string.slice(1),
    total: total
  };
  var source = $("#students-table-template").html();
  var template = Handlebars.compile(source);
  var html = template(tableData);
  var containerSelector = "#" + group + "-" + dataSet + "-table";
  $(containerSelector).html(html);
}

function processBarchartData(data, dataType) {
  var tempData = {},
      total = 0,
      processedData = [],
      sortedData = [],
      chartValueOrders = {
    gender: ["Male", "Female", "Non-binary", "Other", "Not provided", "Not collected"],
    race: ["American Indian or Alaska Native ", "Asian or Asian American", "Black or African American", "Middle Eastern or Northern African ", "Native Hawaiian or Other Pacific Islander", "White", "Other", "Multi Racial", "Collected but not recognized", "Not provided", "Not collected"],
    ethnicity: ["Hispanic or Latino/a/x", "Not Hispanic or Latino/a/x", "Not Provided", "Not Collected"]
  };
  data.forEach(d => {
    if (tempData[d[dataType]] === undefined) {
      tempData[d[dataType]] = d.count;
    } else {
      tempData[d[dataType]] += d.count;
    }

    total += d.count;
  });
  var keys = Object.keys(tempData);
  keys.forEach(d => {
    var percentage;

    if (total > 0) {
      percentage = Math.round10(tempData[d] / total * 100, -1);
    } else {
      percentage = 0;
    }

    var datum = {
      label: d,
      value: tempData[d],
      percentage: percentage
    };

    if (d === "Non binary") {
      datum.label = "Non-binary";
    }

    processedData.push(datum);
  });
  chartValueOrders[dataType].forEach(orderString => {
    var obj = processedData.filter(d => {
      return d.label === orderString;
    })[0];
    sortedData.push(obj);
  });
  return sortedData;
}

function percentageText(num) {
  return num % 1 === 0 ? num + ".0%" : num + "%";
}

function buildStackedChart(containerID, data) {
  var container = d3.select("#" + containerID),
      width = container.node().clientWidth,
      height = container.node().clientHeight;
  var margin = {
    top: 40,
    right: 0,
    bottom: 60,
    left: 0
  },
      innerWidth = width - chartMargin.left - chartMargin.right,
      innerHeight = height - chartMargin.top - chartMargin.bottom;
  var xScale = d3.scaleBand() // .domain(d3.range(data1.length))
  .domain(data.map(d => d.label)).range([margin.left, innerWidth - margin.right]).padding(0.2);
  var minV = d3.min(data, function (d) {
    return d.val4;
  }),
      maxV = d3.max(data, function (d) {
    return d.val1;
  }),
      absV = Math.max(Math.abs(minV), maxV),
      domainArr = [-absV, absV];
  var yScale = d3.scaleLinear() //TODO - domain - [larges absolute value negative, largest absolute value]
  .domain([d3.min(data, function (d) {
    return d.val4;
  }), d3.max(data, function (d) {
    return d.val1;
  })] //domainArr            
  ).nice().range([innerHeight, 0]);
  window.xScales[containerID] = xScale;
  window.yScales[containerID] = yScale;
  var tip1 = d3.tip().attr('class', 'd3-tip').html((EVENT, d) => {
    return `Count: ${d.a1}<br>Percent: ${d.percentage1}%`;
  }),
      tip2 = d3.tip().attr('class', 'd3-tip').html((EVENT, d) => {
    return `Count: ${d.a2}<br>Percent: ${d.percentage2}%`;
  }),
      tip3 = d3.tip().attr('class', 'd3-tip').html((EVENT, d) => {
    return `Count: ${d.a3}<br>Percent: ${d.percentage3}%`;
  }),
      tip4 = d3.tip().attr('class', 'd3-tip').direction("s").html((EVENT, d) => {
    return `Count: ${d.a4}<br>Percent: ${d.percentage4}%`;
  });
  var svg = container.append('svg').attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  svg.call(tip1);
  svg.call(tip2);
  svg.call(tip3);
  svg.call(tip4);
  var rx = 5,
      ry = 5; //Order of declarations matter

  var bars1 = svg.selectAll(".bar1").data(data).enter().append("g");
  var bars4 = svg.selectAll(".bar4").data(data).enter().append("g");
  var bars2 = svg.selectAll(".bar2").data(data).enter().append("g");
  var bars3 = svg.selectAll(".bar3").data(data).enter().append("g");
  var bars5 = svg.selectAll(".bar5").data(data).enter().append("g");
  bars1.append('path').attr("class", "bar top").attr("d", d => {
    // var corners = (d.a2 === 0 && d.a3 === 0 && d.a4 === 0) ? [10, 10, 10, 10] : [10, 10, 0, 0];
    var corners = [10, 10, 0, 0];
    return roundedRect(xScale(d.label), yScale(d.val1), xScale.bandwidth(), yScale(0) - yScale(d.val1), // [10, 10, 0, 0]   /* corner values of bar paths */
    corners);
  }).on("mouseover", tip1.show).on("mouseout", tip1.hide); // .on("mouseover", (a,b,c,d)=>{
  //     console.log("hover", a, b, c, d);
  // })
  // .on("mouseout", tip1.hide)

  bars2.append('path').attr("class", "bar upper").attr("d", d => {
    var corners = d.a1 === 0 ? [10, 10, 0, 0] : [0, 0, 0, 0];
    return roundedRect(xScale(d.label), yScale(d.val2), xScale.bandwidth(), yScale(0) - yScale(d.val2), // [0, 0, 0, 0]   /* corner values of bar paths */
    corners);
  }).on("mouseover", tip2.show).on("mouseout", tip2.hide);
  bars3.append('path').attr("class", "bar lower").attr("d", d => {
    var corners = d.a4 === 0 ? [0, 0, 10, 10] : [0, 0, 0, 0];
    return roundedRect(xScale(d.label), // yScale(d.val3) - yScale(0),
    yScale(0), xScale.bandwidth(), yScale(0) - yScale(-d.val3), // yScale(d.val3),
    // yScale(0),
    // [0, 0, 0, 0]   /* corner values of bar paths */
    corners);
  }).on("mouseover", tip3.show).on("mouseout", tip3.hide);
  bars4.append('path').attr("class", "bar bottom").attr("d", d => {
    var corners = d.a2 === 0 && d.a3 === 0 && d.a1 === 0 ? [10, 10, 10, 10] : [0, 0, 10, 10];
    return roundedRect(xScale(d.label), yScale(0), xScale.bandwidth(), yScale(0) - yScale(-d.val4), // [0, 0, 10, 10]   /* corner values of bar paths */
    corners);
  }).on("mouseover", tip4.show).on("mouseout", tip4.hide);
  bars1.append("text").text(function (d) {
    return d.percentage2 >= 5 ? percentageText(d.percentage1) : ""; // return ( percentageText(d.percentage1) );
  }).attr("class", "stacked bar-label first top").attr("x", function (d) {
    return xScale(d.label) + xScale.bandwidth() / 2;
  }).attr("y", function (d) {
    return yScale(d.val1) + (yScale(0) - yScale(d.percentage1)) / 2 + 6;
  }) // .attr("font-family" , "sans-serif")
  .attr("font-size", "14px").attr("text-anchor", "middle");
  bars2.append("text").text(function (d) {
    return d.percentage2 >= 5 ? percentageText(d.percentage2) : ""; // return ( percentageText(d.percentage2) );
  }).attr("class", "stacked bar-label upper").attr("x", function (d) {
    return xScale(d.label) + xScale.bandwidth() / 2;
  }).attr("y", function (d) {
    return yScale(d.val2) + (yScale(0) - yScale(d.percentage2)) / 2 + 6;
  }) // .attr("font-family" , "sans-serif")
  .attr("font-size", "14px").attr("text-anchor", "middle");
  bars3.append("text").text(function (d) {
    return d.percentage3 >= 5 ? percentageText(d.percentage3) : ""; // return ( percentageText(d.percentage3) );
  }).attr("class", "stacked bar-label lower").attr("x", function (d) {
    return xScale(d.label) + xScale.bandwidth() / 2;
  }).attr("y", function (d) {
    return yScale(0) + (yScale(d.val3) - yScale(0)) / 2 + 6;
  }) // .attr("font-family" , "sans-serif")
  .attr("font-size", "14px").attr("text-anchor", "middle");
  bars4.append("text").text(function (d) {
    return d.percentage4 >= 5 ? percentageText(d.percentage4) : ""; // return ( percentageText(d.percentage4) );
  }).attr("class", "stacked bar-label bottom").attr("x", function (d) {
    return xScale(d.label) + xScale.bandwidth() / 2;
  }).attr("y", function (d) {
    return yScale(d.val3) + (yScale(d.val4) - yScale(d.val3)) / 2 + 6;
  }) // .attr("font-family" , "sans-serif")
  .attr("font-size", "14px").attr("text-anchor", "middle");

  var xAxis = g => g.attr("transform", `translate(0,${innerHeight})`).call(d3.axisBottom(xScale).tickFormat(label => label).tickSize(0).tickPadding(15));

  svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + innerHeight + ")").call(xAxis).selectAll(".tick text").call(wrap, xScale.bandwidth());
  svg.append('g').append('line').attr("class", "center-line").style("stroke", "#C9E0E9").style("stroke-width", 2).attr("stroke-dasharray", "4").attr("x1", 35).attr("y1", yScale(0)).attr("x2", width - chartMargin.right - 35).attr("y2", yScale(0));
  svg.append("g").append("text").attr("class", "no-data-text").style("opacity", 0).text("This question is only asked of respondents who are associated with a partner organization.").attr("x", "50%").attr("y", innerHeight * .4).call(noDataWrap, 400);
}

function updateStackedChart(containerID, data) {
  console.log(containerID + " should update stack type 1 with: ", data);
  var container = d3.select("#" + containerID),
      xScale = window.xScales[containerID],
      yScale = window.yScales[containerID];
  var bars1 = container.selectAll(".bar.top"),
      bars4 = container.selectAll(".bar.bottom"),
      bars2 = container.selectAll(".bar.upper"),
      bars3 = container.selectAll(".bar.lower");
  var maxTotal = d3.max(data, function (d) {
    return d.total;
  });
  yScale.domain([d3.min(data, function (d) {
    return d.val4;
  }), d3.max(data, function (d) {
    return d.val1;
  })]).nice();

  if (maxTotal > 0) {
    container.select(".no-data-text").transition().duration(200).style("opacity", 0);
  }

  var bar1Labels = container.selectAll(".bar-label.top").data(data).transition().duration(250).style("opacity", 0).on("end", function () {
    d3.select(this).text(function (d) {
      return d.percentage1 >= 5 ? percentageText(d.percentage1) : ""; // return ( percentageText(d.percentage1) );
    }).attr("y", function (d) {
      return yScale(d.val1) + (yScale(0) - yScale(d.percentage1)) / 2 + 6;
    });
  });
  var bar2Labels = container.selectAll(".bar-label.upper").data(data).transition().duration(250).style("opacity", 0).on("end", function () {
    d3.select(this).text(function (d) {
      return d.percentage2 >= 5 ? percentageText(d.percentage2) : ""; // return ( percentageText(d.percentage2) );
    }).attr("y", function (d) {
      return yScale(d.val2) + (yScale(0) - yScale(d.percentage2)) / 2 + 6;
    });
  });
  var bar3Labels = container.selectAll(".bar-label.lower").data(data).transition().duration(250).style("opacity", 0).on("end", function () {
    d3.select(this).text(function (d) {
      return d.percentage3 >= 5 ? percentageText(d.percentage3) : ""; // return ( percentageText(d.percentage3) );
    }).attr("y", function (d) {
      return yScale(0) + (yScale(d.val3) - yScale(0)) / 2 + 6;
    });
  });
  var bar4Labels = container.selectAll(".bar-label.bottom").data(data).transition().duration(250).style("opacity", 0).on("end", function () {
    d3.select(this).text(function (d) {
      return d.percentage4 >= 5 ? percentageText(d.percentage4) : ""; // return ( percentageText(d.percentage4) );
    }).attr("y", function (d) {
      return yScale(d.val3) + (yScale(d.val4) - yScale(d.val3)) / 2 + 6;
    });
  });
  bars1.data(data).transition().delay(250).duration(500).style("opacity", 0).on("end", function () {
    d3.select(this).attr("d", d => {
      // var corners = (d.a2 === 0 && d.a3 === 0 && d.a4 === 0) ? [10, 10, 10, 10] : [10, 10, 0, 0];
      var corners = [10, 10, 0, 0];
      return roundedRect(xScale(d.label), yScale(d.val1), xScale.bandwidth(), yScale(0) - yScale(d.val1), corners);
    });
  });
  bars2.data(data).transition().delay(250).duration(500).style("opacity", 0).on("end", function () {
    d3.select(this).attr("d", d => {
      var corners = d.a1 === 0 ? [10, 10, 0, 0] : [0, 0, 0, 0];
      return roundedRect(xScale(d.label), yScale(d.val2), xScale.bandwidth(), yScale(0) - yScale(d.val2), corners);
    });
  });
  bars3.data(data).transition().delay(250).duration(500).style("opacity", 0).on("end", function () {
    d3.select(this).attr("d", d => {
      var corners = d.a4 === 0 ? [0, 0, 10, 10] : [0, 0, 0, 0];
      return roundedRect(xScale(d.label), yScale(0), xScale.bandwidth(), yScale(0) - yScale(-d.val3), corners);
    });
  });
  bars4.data(data).transition().delay(250).duration(500).style("opacity", 0).on("end", function () {
    d3.select(this).attr("d", d => {
      var corners = d.a2 === 0 && d.a3 === 0 && d.a1 === 0 ? [10, 10, 10, 10] : [0, 0, 10, 10];
      return roundedRect(xScale(d.label), yScale(0), xScale.bandwidth(), yScale(0) - yScale(-d.val4), corners);
    });
  });
  var line = container.select('.center-line').data(data).transition().delay(750).duration(200).style("opacity", 0).on("end", function () {
    d3.select(this).attr("y1", yScale(0)).attr("y2", yScale(0));
  });

  if (maxTotal > 0) {
    line.transition().delay(500).duration(200).style("opacity", 1);
  }

  bars1.transition().delay(1200).duration(500).style("opacity", 1);
  bars2.transition().delay(1200).duration(500).style("opacity", 1);
  bars3.transition().delay(1200).duration(500).style("opacity", 1);
  bars4.transition().delay(1200).duration(500).style("opacity", 1);
  bar1Labels.transition().delay(1700).duration(250).style("opacity", 1);
  bar2Labels.transition().delay(1700).duration(250).style("opacity", 1);
  bar3Labels.transition().delay(1700).duration(250).style("opacity", 1);
  bar4Labels.transition().delay(1700).duration(250).style("opacity", 1);

  if (maxTotal === 0) {
    container.select(".no-data-text").transition().delay(1700).duration(250).style("opacity", 1);
  }
}

function processStackedchartData(data, question) {
  var newData = [],
      processedYA = {
    a1: 0,
    a2: 0,
    a3: 0,
    a4: 0,
    total: 0,
    label: "All Years of Project Funding"
  },
      processedY2 = {
    a1: 0,
    a2: 0,
    a3: 0,
    a4: 0,
    total: 0,
    label: "Year 2 of Project Funding"
  },
      processedY3 = {
    a1: 0,
    a2: 0,
    a3: 0,
    a4: 0,
    total: 0,
    label: "Year 3 of Project Funding"
  },
      year2,
      year3;
  year2 = data.filter(d => {
    return d.FundingYear === "2";
  });
  year3 = data.filter(d => {
    return d.FundingYear === "3";
  });
  var ia = data.length,
      i2 = year2.length,
      i3 = year3.length;
  data.forEach((d, i) => {
    switch (d[question]) {
      case "1":
        processedYA.a4 += 1;
        processedYA.total += 1;
        break;

      case "2":
        processedYA.a3 += 1;
        processedYA.total += 1;
        break;

      case "3":
        processedYA.a2 += 1;
        processedYA.total += 1;
        break;

      case "4":
        processedYA.a1 += 1;
        processedYA.total += 1;
        break;

      default:
    }

    if (i === ia - 1) {
      for (var i = 1; i < 6; i++) {
        if (processedYA[`a${i}`] > 0) {
          processedYA[`percentage${i}`] = Math.round10(processedYA[`a${i}`] / processedYA.total * 100, -1);
        } else {
          processedYA[`percentage${i}`] = 0;
        }
      }

      processedYA.val1 = processedYA.percentage1 + processedYA.percentage2;
      processedYA.val2 = processedYA.percentage2;
      processedYA.val3 = -processedYA.percentage3;
      processedYA.val4 = -(processedYA.percentage3 + processedYA.percentage4);
      newData.push(processedYA);
    }
  }); //process year 2 by question

  year2.forEach((d, i) => {
    switch (d[question]) {
      case "1":
        processedY2.a4 += 1;
        processedY2.total += 1;
        break;

      case "2":
        processedY2.a3 += 1;
        processedY2.total += 1;
        break;

      case "3":
        processedY2.a2 += 1;
        processedY2.total += 1;
        break;

      case "4":
        processedY2.a1 += 1;
        processedY2.total += 1;
        break;

      default:
    }

    if (i === i2 - 1) {
      for (var i = 1; i < 6; i++) {
        if (processedY2[`a${i}`] > 0) {
          processedY2[`percentage${i}`] = Math.round10(processedY2[`a${i}`] / processedY2.total * 100, -1);
        } else {
          processedY2[`percentage${i}`] = 0;
        }
      }

      processedY2.val1 = processedY2.percentage1 + processedY2.percentage2;
      processedY2.val2 = processedY2.percentage2;
      processedY2.val3 = -processedY2.percentage3;
      processedY2.val4 = -(processedY2.percentage3 + processedY2.percentage4);
      newData.push(processedY2);
    }
  }); //process year 3 by question

  year3.forEach((d, i) => {
    switch (d[question]) {
      case "1":
        processedY3.a4 += 1;
        processedY3.total += 1;
        break;

      case "2":
        processedY3.a3 += 1;
        processedY3.total += 1;
        break;

      case "3":
        processedY3.a2 += 1;
        processedY3.total += 1;
        break;

      case "4":
        processedY3.a1 += 1;
        processedY3.total += 1;
        break;

      default:
    }

    if (i === i3 - 1) {
      for (var i = 1; i < 6; i++) {
        if (processedY3[`a${i}`] > 0) {
          processedY3[`percentage${i}`] = Math.round10(processedY3[`a${i}`] / processedY3.total * 100, -1);
        } else {
          processedY3[`percentage${i}`] = 0;
        }
      }

      processedY3.val1 = processedY3.percentage1 + processedY3.percentage2;
      processedY3.val2 = processedY3.percentage2;
      processedY3.val3 = -processedY3.percentage3;
      processedY3.val4 = -(processedY3.percentage3 + processedY3.percentage4);
      newData.push(processedY3);
    }
  }); // var minval4 = d3.min(newData, (d)=>{ return d.val4 }),
  //     maxPE = d3.max(newData, (d)=>{ return d.percentage5 }),
  //     EEnd = (minval4 * 1.2) + (-maxPE);
  // newData[0].val5End = EEnd;
  // newData[1].val5End = EEnd;
  // newData[0].val5Start = EEnd + newData[0].percentage5;
  // newData[1].val5Start = EEnd + newData[1].percentage5;

  return newData;
}

function buildStackedChart2(containerID, data) {
  var container = d3.select("#" + containerID),
      width = container.node().clientWidth,
      height = container.node().clientHeight;
  var margin = {
    top: 40,
    right: 0,
    bottom: 60,
    left: 0
  },
      innerWidth = width - chartMargin.left - chartMargin.right,
      innerHeight = height - chartMargin.top - chartMargin.bottom;
  var xScale = d3.scaleBand().domain(data.map(d => d.label)).range([margin.left, innerWidth - margin.right]).padding(0.2);
  var yScale = d3.scaleLinear().domain([d3.min(data, function (d) {
    return d.val4;
  }) * 1.2 - d3.max(data, function (d) {
    return d.percentage5;
  }), d3.max(data, function (d) {
    return d.val1;
  })]).nice().range([innerHeight, 0]);
  window.xScales[containerID] = xScale;
  window.yScales[containerID] = yScale;
  var tip1 = d3.tip().attr('class', 'd3-tip').html((EVENT, d) => {
    return `Count: ${d.a1}<br>Percent: ${d.percentage1}%`;
  }),
      tip2 = d3.tip().attr('class', 'd3-tip').html((EVENT, d) => {
    return `Count: ${d.a2}<br>Percent: ${d.percentage2}%`;
  }),
      tip3 = d3.tip().attr('class', 'd3-tip').html((EVENT, d) => {
    return `Count: ${d.a3}<br>Percent: ${d.percentage3}%`;
  }),
      tip4 = d3.tip().attr('class', 'd3-tip').direction("s").html((EVENT, d) => {
    return `Count: ${d.a4}<br>Percent: ${d.percentage4}%`;
  }),
      tip5 = d3.tip().attr('class', 'd3-tip').html((EVENT, d) => {
    return `Count: ${d.a5}<br>Percent: ${d.percentage5}%`;
  });
  var svg = container.append('svg').attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  svg.call(tip1);
  svg.call(tip2);
  svg.call(tip3);
  svg.call(tip4);
  svg.call(tip5);
  var rx = 5,
      ry = 5; //Order of declarations matter

  var bars1 = svg.selectAll(".bar1").data(data).enter().append("g");
  var bars4 = svg.selectAll(".bar4").data(data).enter().append("g");
  var bars2 = svg.selectAll(".bar2").data(data).enter().append("g");
  var bars3 = svg.selectAll(".bar3").data(data).enter().append("g");
  var bars5 = svg.selectAll(".bar5").data(data).enter().append("g");
  bars1.append('path').attr("class", "bar top").attr("d", d => {
    // var corners = (d.a2 === 0 && d.a3 === 0 && d.a4 === 0) ? [10, 10, 10, 10] : [10, 10, 0, 0];
    var corners = [10, 10, 0, 0];
    return roundedRect(xScale(d.label), yScale(d.val1), xScale.bandwidth(), yScale(0) - yScale(d.val1), // [10, 10, 0, 0]   /* corner values of bar paths */
    corners);
  }).on("mouseover", tip1.show).on("mouseout", tip1.hide);
  bars2.append('path').attr("class", "bar upper").attr("d", d => {
    var corners = d.a1 === 0 ? [10, 10, 0, 0] : [0, 0, 0, 0];
    return roundedRect(xScale(d.label), yScale(d.val2), xScale.bandwidth(), yScale(0) - yScale(d.val2), // [0, 0, 0, 0]   /* corner values of bar paths */
    corners);
  }).on("mouseover", tip2.show).on("mouseout", tip2.hide);
  bars3.append('path').attr("class", "bar lower").attr("d", d => {
    var corners = d.a4 === 0 ? [0, 0, 10, 10] : [0, 0, 0, 0];
    return roundedRect(xScale(d.label), yScale(0), xScale.bandwidth(), yScale(0) - yScale(-d.val3), // [0, 0, 0, 0]   /* corner values of bar paths */
    corners);
  }).on("mouseover", tip3.show).on("mouseout", tip3.hide);
  bars4.append('path').attr("class", "bar bottom").attr("d", d => {
    var corners = d.a2 === 0 && d.a3 === 0 && d.a1 === 0 ? [10, 10, 10, 10] : [0, 0, 10, 10];
    return roundedRect(xScale(d.label), yScale(0), xScale.bandwidth(), yScale(0) - yScale(-d.val4), // [0, 0, 10, 10]   /* corner values of bar paths */
    corners);
  }).on("mouseover", tip4.show).on("mouseout", tip4.hide);
  bars5.append('path').attr("class", "bar nonstack").attr("d", d => roundedRect(xScale(d.label), yScale(d.val5Start), xScale.bandwidth(), yScale(0) - yScale(d.percentage5), //???
  [10, 10, 10, 10]
  /* corner values of bar paths */
  )).on("mouseover", tip5.show).on("mouseout", tip5.hide);
  bars1.append("text").text(function (d) {
    return d.percentage1 >= 5 ? percentageText(d.percentage1) : ""; // return ( percentageText(d.percentage1) );
  }).attr("class", "stacked bar-label first top").attr("x", function (d) {
    return xScale(d.label) + xScale.bandwidth() / 2;
  }).attr("y", function (d) {
    return yScale(d.val1) + (yScale(0) - yScale(d.percentage1)) / 2 + 6;
  }) // .attr("font-family" , "sans-serif")
  .attr("font-size", "14px").attr("text-anchor", "middle");
  bars2.append("text").text(function (d) {
    return d.percentage2 >= 5 ? percentageText(d.percentage2) : ""; // return ( percentageText(d.percentage2) );
  }).attr("class", "stacked bar-label upper").attr("x", function (d) {
    return xScale(d.label) + xScale.bandwidth() / 2;
  }).attr("y", function (d) {
    return yScale(d.val2) + (yScale(0) - yScale(d.percentage2)) / 2 + 6;
  }) // .attr("font-family" , "sans-serif")
  .attr("font-size", "14px").attr("text-anchor", "middle");
  bars3.append("text").text(function (d) {
    return d.percentage3 >= 5 ? percentageText(d.percentage3) : ""; // return ( percentageText(d.percentage3) );
  }).attr("class", "stacked bar-label lower").attr("x", function (d) {
    return xScale(d.label) + xScale.bandwidth() / 2;
  }).attr("y", function (d) {
    return yScale(0) + (yScale(d.val3) - yScale(0)) / 2 + 6;
  }) // .attr("font-family" , "sans-serif")
  .attr("font-size", "14px").attr("text-anchor", "middle");
  bars4.append("text").text(function (d) {
    return d.percentage4 >= 5 ? percentageText(d.percentage4) : ""; // return ( percentageText(d.percentage4) );
  }).attr("class", "stacked bar-label bottom").attr("x", function (d) {
    return xScale(d.label) + xScale.bandwidth() / 2;
  }).attr("y", function (d) {
    return yScale(d.val3) + (yScale(d.val4) - yScale(d.val3)) / 2 + 6;
  }) // .attr("font-family" , "sans-serif")
  .attr("font-size", "14px").attr("text-anchor", "middle");
  bars5.append("text").text(function (d) {
    return d.percentage5 >= 5 ? percentageText(d.percentage5) : ""; // return ( percentageText(d.percentage5) );
  }).attr("class", "stacked bar-label nonstack").attr("x", function (d) {
    return xScale(d.label) + xScale.bandwidth() / 2;
  }).attr("y", function (d) {
    return yScale(d.val5Start) + (yScale(d.val5End) - yScale(d.val5Start)) / 2 + 6;
  }) // .attr("font-family" , "sans-serif")
  .attr("font-size", "14px").attr("text-anchor", "middle");

  var xAxis = g => g.attr("transform", `translate(0,${innerHeight})`).call(d3.axisBottom(xScale).tickFormat(label => label).tickSize(0).tickPadding(15));

  svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + innerHeight + ")").call(xAxis).selectAll(".tick text").call(wrap, xScale.bandwidth());
  svg.append('g').append('line').attr("class", "center-line").style("stroke", "#C9E0E9").style("stroke-width", 2).attr("stroke-dasharray", "4").attr("x1", 35).attr("y1", yScale(0)).attr("x2", width - chartMargin.right - 35).attr("y2", yScale(0));
  svg.append("g").append("text").attr("class", "no-data-text").style("opacity", 0).text("This question is only asked of respondents who are associated with a partner organization.").attr("x", "50%").attr("y", innerHeight * .4).call(noDataWrap, 400);
}

function updateStackedChart2(containerID, data) {
  console.log(containerID + " should update stack type 2 with: ", data);
  var container = d3.select("#" + containerID),
      xScale = window.xScales[containerID],
      yScale = window.yScales[containerID];
  var bars1 = container.selectAll(".bar.top"),
      bars4 = container.selectAll(".bar.bottom"),
      bars2 = container.selectAll(".bar.upper"),
      bars3 = container.selectAll(".bar.lower"),
      bars5 = container.selectAll(".bar.nonstack");
  var maxTotal = d3.max(data, function (d) {
    return d.total;
  });
  yScale.domain([d3.min(data, function (d) {
    return d.val4;
  }) * 1.2 - d3.max(data, function (d) {
    return d.percentage5;
  }), d3.max(data, function (d) {
    return d.val1;
  })]).nice();

  if (maxTotal > 0) {
    container.select(".no-data-text").transition().duration(200).style("opacity", 0);
  }

  var bar1Labels = container.selectAll(".bar-label.top").data(data).transition().duration(250).style("opacity", 0).on("end", function () {
    d3.select(this).text(function (d) {
      return d.percentage1 >= 5 ? percentageText(d.percentage1) : ""; // return ( percentageText(d.percentage1) );
    }).attr("y", function (d) {
      return yScale(d.val1) + (yScale(0) - yScale(d.percentage1)) / 2 + 6;
    });
  });
  var bar2Labels = container.selectAll(".bar-label.upper").data(data).transition().duration(250).style("opacity", 0).on("end", function () {
    d3.select(this).text(function (d) {
      return d.percentage2 >= 5 ? percentageText(d.percentage2) : ""; // return ( percentageText(d.percentage2) );
    }).attr("y", function (d) {
      return yScale(d.val2) + (yScale(0) - yScale(d.percentage2)) / 2 + 6;
    });
  });
  var bar3Labels = container.selectAll(".bar-label.lower").data(data).transition().duration(250).style("opacity", 0).on("end", function () {
    d3.select(this).text(function (d) {
      return d.percentage3 >= 5 ? percentageText(d.percentage3) : ""; // return ( percentageText(d.percentage3) );
    }).attr("y", function (d) {
      return yScale(0) + (yScale(d.val3) - yScale(0)) / 2 + 6;
    });
  });
  var bar4Labels = container.selectAll(".bar-label.bottom").data(data).transition().duration(250).style("opacity", 0).on("end", function () {
    d3.select(this).text(function (d) {
      return d.percentage4 >= 5 ? percentageText(d.percentage4) : ""; // return ( percentageText(d.percentage4) );
    }).attr("y", function (d) {
      return yScale(d.val3) + (yScale(d.val4) - yScale(d.val3)) / 2 + 6;
    });
  });
  var bar5Labels = container.selectAll(".bar-label.nonstack").data(data).transition().duration(250).style("opacity", 0).on("end", function () {
    d3.select(this).text(function (d) {
      return d.percentage5 >= 5 ? percentageText(d.percentage5) : ""; // return ( percentageText(d.percentage5) );
    }).attr("y", function (d) {
      return yScale(d.val5Start) + (yScale(d.val5End) - yScale(d.val5Start)) / 2 + 6;
    });
  });
  bars1.data(data).transition().delay(250).duration(500).style("opacity", 0).on("end", function () {
    d3.select(this).attr("d", d => {
      // var corners = (d.a2 === 0 && d.a3 === 0 && d.a4 === 0) ? [10, 10, 10, 10] : [10, 10, 0, 0];
      var corners = [10, 10, 0, 0];
      return roundedRect(xScale(d.label), yScale(d.val1), xScale.bandwidth(), yScale(0) - yScale(d.val1), corners);
    });
  });
  bars2.data(data).transition().delay(250).duration(500).style("opacity", 0).on("end", function () {
    d3.select(this).attr("d", d => {
      var corners = d.a1 === 0 ? [10, 10, 0, 0] : [0, 0, 0, 0];
      return roundedRect(xScale(d.label), yScale(d.val2), xScale.bandwidth(), yScale(0) - yScale(d.val2), corners);
    });
  });
  bars3.data(data).transition().delay(250).duration(500).style("opacity", 0).on("end", function () {
    d3.select(this).attr("d", d => {
      var corners = d.a4 === 0 ? [0, 0, 10, 10] : [0, 0, 0, 0];
      return roundedRect(xScale(d.label), yScale(0), xScale.bandwidth(), yScale(0) - yScale(-d.val3), corners);
    });
  });
  bars4.data(data).transition().delay(250).duration(500).style("opacity", 0).on("end", function () {
    d3.select(this).attr("d", d => {
      var corners = d.a2 === 0 && d.a3 === 0 && d.a1 === 0 ? [10, 10, 10, 10] : [0, 0, 10, 10];
      return roundedRect(xScale(d.label), yScale(0), xScale.bandwidth(), yScale(0) - yScale(-d.val4), corners);
    });
  });
  bars5.data(data).transition().delay(250).duration(500).style("opacity", 0).on("end", function () {
    d3.select(this).attr("d", d => {
      var corners = d.a2 === 0 && d.a3 === 0 && d.a1 === 0 ? [10, 10, 10, 10] : [0, 0, 10, 10];
      return roundedRect(xScale(d.label), yScale(d.val5Start), xScale.bandwidth(), yScale(0) - yScale(d.percentage5), [10, 10, 10, 10]);
    });
  });
  var line = container.select('.center-line').data(data).transition().delay(750).duration(200).style("opacity", 0).on("end", function () {
    d3.select(this).attr("y1", yScale(0)).attr("y2", yScale(0));
  });

  if (maxTotal > 0) {
    line.transition().delay(500).duration(200).style("opacity", 1);
  }

  bars1.transition().delay(1200).duration(500).style("opacity", 1);
  bars2.transition().delay(1200).duration(500).style("opacity", 1);
  bars3.transition().delay(1200).duration(500).style("opacity", 1);
  bars4.transition().delay(1200).duration(500).style("opacity", 1);
  bars5.transition().delay(1200).duration(500).style("opacity", 1);
  bar1Labels.transition().delay(1700).duration(250).style("opacity", 1);
  bar2Labels.transition().delay(1700).duration(250).style("opacity", 1);
  bar3Labels.transition().delay(1700).duration(250).style("opacity", 1);
  bar4Labels.transition().delay(1700).duration(250).style("opacity", 1);
  bar5Labels.transition().delay(1700).duration(250).style("opacity", 1);

  if (maxTotal === 0) {
    container.select(".no-data-text").transition().delay(1700).duration(250).style("opacity", 1);
  }
}

function processStackedchartData2(data, question) {
  var newData = [],
      processedYA = {
    a1: 0,
    a2: 0,
    a3: 0,
    a4: 0,
    a5: 0,
    total: 0,
    label: "All Years of Project Funding"
  },
      processedY2 = {
    a1: 0,
    a2: 0,
    a3: 0,
    a4: 0,
    a5: 0,
    total: 0,
    label: "Year 2 of Project Funding"
  },
      processedY3 = {
    a1: 0,
    a2: 0,
    a3: 0,
    a4: 0,
    a5: 0,
    total: 0,
    label: "Year 3 of Project Funding"
  },
      year2,
      year3;
  year2 = data.filter(d => {
    return d.FundingYear === "2";
  });
  year3 = data.filter(d => {
    return d.FundingYear === "3";
  });
  var ia = data.length,
      i2 = year2.length,
      i3 = year3.length;
  data.forEach((d, i) => {
    switch (d[question]) {
      case "1":
        processedYA.a4 += 1;
        processedYA.total += 1;
        break;

      case "2":
        processedYA.a3 += 1;
        processedYA.total += 1;
        break;

      case "3":
        processedYA.a2 += 1;
        processedYA.total += 1;
        break;

      case "4":
        processedYA.a1 += 1;
        processedYA.total += 1;
        break;

      case "5":
        processedYA.a5 += 1;
        processedYA.total += 1;
        break;
    }

    if (i === ia - 1) {
      for (var i = 1; i < 6; i++) {
        if (processedYA[`a${i}`] > 0) {
          processedYA[`percentage${i}`] = Math.round10(processedYA[`a${i}`] / processedYA.total * 100, -1);
        } else {
          processedYA[`percentage${i}`] = 0;
        }
      }

      processedYA.val1 = processedYA.percentage1 + processedYA.percentage2;
      processedYA.val2 = processedYA.percentage2;
      processedYA.val3 = -processedYA.percentage3;
      processedYA.val4 = -(processedYA.percentage3 + processedYA.percentage4);
      newData.push(processedYA);
    }
  }); //process year 2 by question

  year2.forEach((d, i) => {
    switch (d[question]) {
      case "1":
        processedY2.a4 += 1;
        processedY2.total += 1;
        break;

      case "2":
        processedY2.a3 += 1;
        processedY2.total += 1;
        break;

      case "3":
        processedY2.a2 += 1;
        processedY2.total += 1;
        break;

      case "4":
        processedY2.a1 += 1;
        processedY2.total += 1;
        break;

      case "5":
        processedY2.a5 += 1;
        processedY2.total += 1;
        break;
    }

    if (i === i2 - 1) {
      for (var i = 1; i < 6; i++) {
        if (processedY2[`a${i}`] > 0) {
          processedY2[`percentage${i}`] = Math.round10(processedY2[`a${i}`] / processedY2.total * 100, -1);
        } else {
          processedY2[`percentage${i}`] = 0;
        }
      }

      processedY2.val1 = processedY2.percentage1 + processedY2.percentage2;
      processedY2.val2 = processedY2.percentage2;
      processedY2.val3 = -processedY2.percentage3;
      processedY2.val4 = -(processedY2.percentage3 + processedY2.percentage4);
      newData.push(processedY2);
    }
  }); //process year 3 by question

  year3.forEach((d, i) => {
    switch (d[question]) {
      case "1":
        processedY3.a4 += 1;
        processedY3.total += 1;
        break;

      case "2":
        processedY3.a3 += 1;
        processedY3.total += 1;
        break;

      case "3":
        processedY3.a2 += 1;
        processedY3.total += 1;
        break;

      case "4":
        processedY3.a1 += 1;
        processedY3.total += 1;
        break;

      case "5":
        processedY3.a5 += 1;
        processedY3.total += 1;
        break;
    }

    if (i === i3 - 1) {
      for (var i = 1; i < 6; i++) {
        if (processedY3[`a${i}`] > 0) {
          processedY3[`percentage${i}`] = Math.round10(processedY3[`a${i}`] / processedY3.total * 100, -1);
        } else {
          processedY3[`percentage${i}`] = 0;
        }
      }

      processedY3.val1 = processedY3.percentage1 + processedY3.percentage2;
      processedY3.val2 = processedY3.percentage2;
      processedY3.val3 = -processedY3.percentage3;
      processedY3.val4 = -(processedY3.percentage3 + processedY3.percentage4);
      newData.push(processedY3);
    }
  });
  var minval4 = d3.min(newData, d => {
    return d.val4;
  }),
      maxPE = d3.max(newData, d => {
    return d.percentage5;
  }),
      EEnd = minval4 * 1.2 + -maxPE;
  newData[0].val5End = EEnd;
  newData[1].val5End = EEnd;
  newData[2].val5End = EEnd;
  newData[0].val5Start = EEnd + newData[0].percentage5;
  newData[1].val5Start = EEnd + newData[1].percentage5;
  newData[2].val5Start = EEnd + newData[2].percentage5;
  return newData;
}

function populateFilters(containerID, data) {
  var source = $("#drop-filter-template").html();
  var template = Handlebars.compile(source);
  var html = template(data);
  $(containerID).append(html);
}

function uniqueValues(arr, prop) {
  var flags = [],
      output = [],
      l = arr.length,
      i;

  for (i = 0; i < l; i++) {
    if (flags[arr[i][prop]]) continue;
    flags[arr[i][prop]] = true;
    output.push(arr[i][prop]);
  }

  return output;
}

d3.csv('data/students-gender.csv', d => ({
  count: +d.Count,
  alliance: d.Alliance,
  gender: d.Gender,
  programType: d.Program_Type,
  record: d.Record,
  servicePopulation: d.Service_Population,
  serviceType: d.Service_Type,
  studentType: d.Student_Type,
  year: d.Year
})).then(data => {
  studentData.gender = data;
}).then(() => {
  d3.select("#student-gender-studentType").on("change", e => {
    var val = e.target.value,
        dataSet = "gender",
        filteredData;

    if (val !== "all") {
      filteredData = studentData.gender.filter(d => {
        return d.studentType == val;
      });
    } else {
      filteredData = studentData.gender;
    }

    var processedData = processBarchartData(filteredData, dataSet);
    updatechart("student-" + dataSet + "-bar-chart", processedData);
    populateTable("student", dataSet, processedData);
  });
});
d3.csv('data/students-ethnicity.csv', d => ({
  count: +d.Count,
  alliance: d.Alliance,
  ethnicity: d.Ethnicity,
  programType: d.Program_Type,
  record: d.Record,
  servicePopulation: d.Service_Population,
  serviceType: d.Service_Type,
  studentType: d.Student_Type,
  year: d.Year
})).then(data => {
  studentData.ethnicity = data;
}).then(() => {
  //populate select options with filter listener
  d3.select("#student-ethnicity-studentType").on("change", e => {
    var val = e.target.value,
        dataSet = "ethnicity",
        filteredData;

    if (val !== "all") {
      filteredData = studentData.ethnicity.filter(d => {
        return d.studentType == val;
      });
    } else {
      filteredData = studentData.ethnicity;
    }

    var processedData = processBarchartData(filteredData, dataSet);
    updatechart("student-" + dataSet + "-bar-chart", processedData);
    populateTable("student", dataSet, processedData);
  });
});
d3.csv('data/students-race.csv', d => ({
  count: +d.Count,
  alliance: d.Alliance,
  race: d.Race,
  programType: d.Program_Type,
  record: d.Record,
  servicePopulation: d.Service_Population,
  serviceType: d.Service_Type,
  studentType: d.Student_Type,
  year: d.Year
})).then(data => {
  studentData.race = data;
}).then(() => {
  //populate select options with filter listener
  d3.select("#student-race-studentType").on("change", e => {
    var val = e.target.value,
        dataSet = "race",
        filteredData;

    if (val !== "all") {
      filteredData = studentData.race.filter(d => {
        return d.studentType == val;
      });
    } else {
      filteredData = studentData.race;
    }

    var processedData = processBarchartData(filteredData, dataSet);
    updatechart("student-" + dataSet + "-bar-chart", processedData);
    populateTable("student", dataSet, processedData);
  });
}); // d3.csv('http://localhost:8888/data/educators-gender.csv', (d) => (

d3.csv('data/educators-gender.csv', d => ({
  count: +d.Count,
  alliance: d.Alliance,
  gender: d.Gender,
  programType: d.Program_Type,
  record: d.Record,
  servicePopulation: d.Service_Population,
  serviceType: d.Service_Type,
  educatorType: d.Educator_Type,
  year: d.Year
})).then(data => {
  // var filteredData = data.filter((d)=>{
  //     return d.educatorType !== "Other Non-PreK-12/IHE professionals";
  // })
  // educatorData.gender = filteredData;
  educatorData.gender = data;
}) // .then(() => {
//     var values = uniqueValues(educatorData.gender, 'educatorType');
//         populateFilters("#educator-gender-educatorType", values); 
// })
.then(() => {
  //populate select options with filter listener
  d3.select("#educator-gender-educatorType").on("change", e => {
    var val = e.target.value,
        dataSet = "gender",
        filteredData;

    if (val !== "all") {
      filteredData = educatorData.gender.filter(d => {
        return d.educatorType == val;
      });
    } else {
      filteredData = educatorData.gender;
    }

    var processedData = processBarchartData(filteredData, dataSet);
    updatechart("educator-" + dataSet + "-bar-chart", processedData);
    populateTable("educator", dataSet, processedData);
  });
});
d3.csv('data/educators-ethnicity.csv', d => ({
  count: +d.Count,
  alliance: d.Alliance,
  ethnicity: d.Ethnicity,
  programType: d.Program_Type,
  record: d.Record,
  servicePopulation: d.Service_Population,
  serviceType: d.Service_Type,
  educatorType: d.Educator_Type,
  year: d.Year
})).then(data => {
  // var filteredData = data.filter((d)=>{
  //     return d.educatorType !== "Other Non-PreK-12/IHE professionals";
  // })
  // educatorData.ethnicity = filteredData;
  educatorData.ethnicity = data;
}) // .then(() => {
//     var values = uniqueValues(educatorData.ethnicity, 'educatorType');
//         populateFilters("#educator-ethnicity-educatorType", values);
// })
.then(() => {
  //populate select options with filter listener
  d3.select("#educator-ethnicity-educatorType").on("change", e => {
    var val = e.target.value,
        dataSet = "ethnicity",
        filteredData;

    if (val !== "all") {
      filteredData = educatorData.ethnicity.filter(d => {
        return d.educatorType == val;
      });
    } else {
      filteredData = educatorData.ethnicity;
    }

    var processedData = processBarchartData(filteredData, dataSet);
    updatechart("educator-" + dataSet + "-bar-chart", processedData);
    populateTable("educator", dataSet, processedData);
  });
});
d3.csv('data/educators-race.csv', d => ({
  count: +d.Count,
  alliance: d.Alliance,
  race: d.Race,
  programType: d.Program_Type,
  record: d.Record,
  servicePopulation: d.Service_Population,
  serviceType: d.Service_Type,
  countType: d.Count_Type,
  educatorType: d.Educator_Type,
  year: d.Year
})).then(data => {
  // var filteredData = data.filter((d)=>{
  //     return d.educatorType !== "Other Non-PreK-12/IHE professionals";
  // })
  // educatorData.race = filteredData;
  educatorData.race = data;
}) // .then(() => {
//     var values = uniqueValues(educatorData.race, 'educatorType');
//         populateFilters("#educator-race-educatorType", values);
// })
.then(() => {
  //populate select options with filter listener
  d3.select("#educator-race-educatorType").on("change", e => {
    var val = e.target.value,
        dataSet = "race",
        filteredData;

    if (val !== "all") {
      filteredData = educatorData.race.filter(d => {
        return d.educatorType == val;
      });
    } else {
      filteredData = educatorData.race;
    }

    var processedData = processBarchartData(filteredData, dataSet);
    updatechart("educator-" + dataSet + "-bar-chart", processedData);
    populateTable("educator", dataSet, processedData);
  });
});
d3.csv('data/survey-data.csv').then(data => {
  surveyData = data;
  /* Below code is for dynamically populated filters */

  /* Leave in case fucntionality is to be restored*/
  // var stackedOrgTypes = uniqueValues(data, "Q1_6");
  // for (var i = 1; i < 6; i++){
  //     populateFilters('#orgType' + i, stackedOrgTypes);
  // }
}).then(data => {
  var nav5 = d3.select('#nav5 .nav.nav-tabs a.active');

  if (nav5._groups[0][0] !== null) {
    var href = nav5.attr('href');
    d3.selectAll(href + " .chart-container").each(function (a, b, c, d) {
      var container = d3.select(this),
          containerID = this.id;

      if (container.select('svg').node() === null) {
        var chartType = container.attr('chart-type');
        setChartContainerHeight(containerID, 1);

        if (chartType === "stacked2") {
          var chartData = processStackedchartData2(surveyData, containerID);
          buildStackedChart2(containerID, chartData);
        } else {
          var chartData = processStackedchartData(surveyData, containerID);
          buildStackedChart(containerID, chartData);
        }
      }
    });
  }

  d3.selectAll('#nav5 .nav.nav-tabs a')._groups[0].forEach(d => {
    var href = d.getAttribute('href');
    var selects = d3.selectAll(href + " .stacked-filter-select");
    selects.on("change", e => {
      var val = e.target.value,
          filteredData;

      if (val !== "all") {
        filteredData = surveyData.filter(d => {
          return d.Q1_6 == val;
        });
      } else {
        filteredData = surveyData;
      } //grab all charts in href


      d3.selectAll(href + " .chart-container").each(function (blank, i, nodeList) {
        var container = d3.select(nodeList[i]),
            containerID = nodeList[i].id,
            chartType = container.attr('chart-type');

        if (chartType === "stacked2") {
          var chartData = processStackedchartData2(filteredData, containerID);
          updateStackedChart2(containerID, chartData);
        } else {
          var chartData = processStackedchartData(filteredData, containerID);
          updateStackedChart(containerID, chartData);
        }
      });
    });
  });
});
//# sourceMappingURL=charts.js.map
