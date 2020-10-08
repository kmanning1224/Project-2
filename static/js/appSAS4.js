function optionChanged(){
    let drop_year = d3.select('#selDataset_year').node().value[0];
    let drop_gender = d3.select('#selDataset_gender').node().value[0];
   createDonut(drop_year,drop_gender);
  }

function createDonut() {
    // var queryUrl = `https://cors-anywhere.herokuapp.com/https://assaultdb.herokuapp.com/gender/${yearSelect}/${genderSelect}`
    var queryUrl = `https://cors-anywhere.herokuapp.com/https://assaultdb.herokuapp.com/gender`
    let url = ["https://assaultdb.herokuapp.com/gender"]
    // let y_select = d3.select('#selDataset_year').node().value[0];
    // let g_select = d3.select('#selDataset_gender').node().value[0];
    
    d3.json(queryUrl,function(testData){
     
      let y_select = d3.select('#selDataset_year').node().value[0];
      let test = [];
      let filter = test.filter(y => y.y_select === y_select);
      let pie = d3.select('#pie')
      pie.html("");

       let yearf = [];
       let yearm = [];

       let partnerf = [];
       let partnerm = [];
       let friendf = [];
       let friendm = [];
       let familyf = [];
       let familym = [];
       let otherf = [];
       let otherm = [];

       let earningsf = [];
       let earningsm = [];
       let threatsf = [];
       let threatsm = [];
       let psyabusef = [];
       let psyabusem = [];
       let phyabusef = [];
       let phyabusem = [];
       let sexabusef = [];
       let sexabusem = [];
       let drugsf = [];
       let drugsm = [];
       let movef = [];
       let movem = [];
       let childrenf = [];
       let childrenm = [];
       let leof = [];
       let leom = [];

       let labourf = [];
       let labourm = [];
       let sexexf = [];
       let sexexm = [];
       let otherexf = [];
       let otherexm = [];
       let abductionf = [];
       let abductionm = [];

       testData.map((testDatum) =>{
        // console.log(testDatum)
      if (testDatum.gender === "Female"){
        let gender = testDatum.gender;
        yearf.push(testDatum.yearOfRegistration);

        partnerf.push(testDatum.recruiterRelationIntimatePartner);
        friendf.push(testDatum.recruiterRelationFriend);
        familyf.push(testDatum.recruiterRelationFamily);
        otherf.push(testDatum.reacruiterRelationOther);

        earningsf.push(testDatum.meansOfControlTakesEarnings);
        threatsf.push(testDatum.meansOfControlThreats);
        psyabusef.push(testDatum.meansOfControlPsychologicalAbuse);
        phyabusef.push(testDatum.meansOfControlPhysicalAbuse);
        sexabusef.push(testDatum.meansOfControlSexualAbuse);
        drugsf.push(testDatum.meansOfControlPsychoactiveSubstances);
        movef.push(testDatum.meansOfControlRestrictsMovement);
        childrenf.push(testDatum.meansOfControlUsesChildren);
        leof.push(testDatum.meansOfControlThreatOfLawEnforcement);

        labourf.push(testDatum.isForcedLabour)
        sexexf.push(testDatum.isSexualExploit)
        otherexf.push(testDatum.isOtherExploit)
        abductionf.push(testDatum.isAbduction)

        var data = [{
          values: [partnerf, friendf, familyf, otherf],
          labels: ['Recruited by Partner', 'Recruited by Friend', 'Recruited by Family', 'Recruited by Other'],
          domain: {column: 0},
          name: 'Recruiter Relation to Victim',
          hoverinfo: 'label+percent',
          hole: .6,
          type: 'pie'
        },
        {
          values: [earningsf, threatsf, psyabusef, phyabusef, sexabusef, drugsf, movef, childrenf, leof],
          labels: ['Controlled by Earnings', 'Controlled by Threats', 'Controlled by Psychological Abuse', 'Controlled by Physical Abuse', 'Controlled by Sexual Abuse', 'Controlled by Psychoactive Substances', 'Controlled by Restrictive Movement', 'Controlled by Use of Children', 'Controlled by Threats of Law Enforcement'],
          textposition: 'inside',
          domain: {column: 1},
          name: 'Means of Control of Victim',
          hoverinfo: 'label+percent',
          hole: .6,
          type: 'pie'
        },{
          values: [labourf, sexexf, otherexf, abductionf],
          labels: ['Exploited by Forced Labour', 'Exploited by Sexual Exploitation', 'Exploited by Other Method', 'Exploited by Abduction'],
          // textposition: 'inside',
          domain: {column: 2},
          name: 'Method of Exploitation of Victim',
          hoverinfo: 'label+percent',
          hole: .6,
          type: 'pie'
        }];
        var layout = {
          title: `${gender} Victim Statistics for ${yearf}`,
          annotations: [
            {
              font: {
                size: 12
              },
              showarrow: false,
              text: "Recruitment",
              x: 0.07,
              y: 0.5
            },
            {
              font: {
                size: 12
              },
              showarrow: false,
              text: "Control",
              x: 0.5,
              y: 0.5
            },
            {
              font: {
                size: 12
              },
              showarrow: false,
              text: "Exploitation",
              x: .93,
              y: 0.5
            }
          ],
          height: 500,
          width: 600,
          showlegend: false,
          grid: {rows: 1, columns: 3}
        };

        Plotly.newPlot('pie', data, layout);
      
      }


      else {
        let gender = testDatum.gender;
        yearm.push(testDatum.yearOfRegistration);

        partnerm.push(testDatum.recruiterRelationIntimatePartner);
        friendm.push(testDatum.recruiterRelationFriend);
        familym.push(testDatum.recruiterRelationFamily);
        otherm.push(testDatum.reacruiterRelationOther);

        earningsm.push(testDatum.meansOfControlTakesEarnings);
        threatsm.push(testDatum.meansOfControlThreats);
        psyabusem.push(testDatum.meansOfControlPsychologicalAbuse);
        phyabusem.push(testDatum.meansOfControlPhysicalAbuse);
        sexabusem.push(testDatum.meansOfControlSexualAbuse);
        drugsm.push(testDatum.meansOfControlPsychoactiveSubstances);
        movem.push(testDatum.meansOfControlRestrictsMovement);
        childrenm.push(testDatum.meansOfControlUsesChildren);
        leom.push(testDatum.meansOfControlThreatOfLawEnforcement);

        labourm.push(testDatum.isForcedLabour)
        sexexm.push(testDatum.isSexualExploit)
        otherexm.push(testDatum.isOtherExploit)
        abductionm.push(testDatum.isAbduction)

        var data = [{
          values: [partnerm, friendm, familym, otherm],
          labels: ['Recruited by Partner', 'Recruited by Friend', 'Recruited by Family', 'Recruited by Other'],
          domain: {column: 0},
          name: 'Recruiter Relation to Victim',
          hoverinfo: 'label+percent',
          hole: .6,
          type: 'pie'
        },
        {
          values: [earningsm, threatsm, psyabusem, phyabusem, sexabusem, drugsm, movem, childrenm, leom],
          labels: ['Controlled by Earnings', 'Controlled by Threats', 'Controlled by Psychological Abuse', 'Controlled by Physical Abuse', 'Controlled by Sexual Abuse', 'Controlled by Psychoactive Substances', 'Controlled by Restrictive Movement', 'Controlled by Use of Children', 'Controlled by Threats of Law Enforcement'],
          textposition: 'inside',
          domain: {column: 1},
          name: 'Means of Control of Victim',
          hoverinfo: 'label+percent',
          hole: .6,
          type: 'pie'
        },{
          values: [labourm, sexexm, otherexm, abductionm],
          labels: ['Exploited by Forced Labour', 'Exploited by Sexual Exploitation', 'Exploited by Other Method', 'Exploited by Abduction'],
          // textposition: 'inside',
          domain: {column: 2},
          name: 'Method of Exploitation of Victim',
          hoverinfo: 'label+percent',
          hole: .6,
          type: 'pie'
        }];
        var layout = {
          title: `${gender} Victim Statistics for ${yearm}`,
          annotations: [
            {
              font: {
                size: 12
              },
              showarrow: false,
              text: "Recruitment",
              x: 0.07,
              y: 0.5
            },
            {
              font: {
                size: 12
              },
              showarrow: false,
              text: "Control",
              x: 0.5,
              y: 0.5
            },
            {
              font: {
                size: 12
              },
              showarrow: false,
              text: "Exploitation",
              x: .93,
              y: 0.5
            }
          ],
          height: 500,
          width: 600,
          showlegend: false,
          grid: {rows: 1, columns: 3}
        };

        Plotly.newPlot('pie', data, layout);

      }
        // var year = data[1].yearOfRegistration;
        // var gender = data[1].gender;
        // var pie = d3.select('#pie');
        // pie.html("");

        // var partner = data.recruiterRelationIntimatePartner;
        // var friend = data.recruiterRelationFriend;
        // var family = data.recruiterRelationFamily;
        // var other = data.recruiterRelationOther;

        // var earnings = data.meansOfControlTakesEarnings;
        // var threats = data.meansOfControlThreats;
        // var psyabuse = data.meansOfControlPsychologicalAbuse;
        // var phyabuse = data.meansOfControlPhysicalAbuse;
        // var sexabuse = data.meansOfControlSexualAbuse;
        // var drugs = data.meansOfControlPsychoactiveSubstances;
        // var move = data.meansOfControlRestrictsMovement;
        // var children = data.meansOfControlUsesChildren;
        // var leo = data.meansOfControlThreatOfLawEnforcement;

        // var labour = data.isForcedLabour;
        // var sexex = data.isSexualExploit;
        // var otherex = data.isOtherExploit;
        // var abduction = data.isAbduction;

        // var data = [{
        //     values: [partnerf, friendf, familyf, otherf],
        //     labels: ['Recruited by Partner', 'Recruited by Friend', 'Recruited by Family', 'Recruited by Other'],
        //     domain: {column: 0},
        //     name: 'Recruiter Relation to Victim',
        //     hoverinfo: 'label+percent',
        //     hole: .6,
        //     type: 'pie'
        //   },
        //   {
        //     values: [earningsf, threatsf, psyabusef, phyabusef, sexabusef, drugsf, movef, childrenf, leof],
        //     labels: ['Controlled by Earnings', 'Controlled by Threats', 'Controlled by Psychological Abuse', 'Controlled by Physical Abuse', 'Controlled by Sexual Abuse', 'Controlled by Psychoactive Substances', 'Controlled by Restrictive Movement', 'Controlled by Use of Children', 'Controlled by Threats of Law Enforcement'],
        //     textposition: 'inside',
        //     domain: {column: 1},
        //     name: 'Means of Control of Victim',
        //     hoverinfo: 'label+percent',
        //     hole: .6,
        //     type: 'pie'
        //   },{
        //     values: [labourf, sexexf, otherexf, abductionf],
        //     labels: ['Exploited by Forced Labour', 'Exploited by Sexual Exploitation', 'Exploited by Other Method', 'Exploited by Abduction'],
        //     // textposition: 'inside',
        //     domain: {column: 2},
        //     name: 'Method of Exploitation of Victim',
        //     hoverinfo: 'label+percent',
        //     hole: .6,
        //     type: 'pie'
        //   }];
        //   var layout = {
        //     title: `${gender} Victim Statistics for ${yearf}`,
        //     annotations: [
        //       {
        //         font: {
        //           size: 12
        //         },
        //         showarrow: false,
        //         text: "Recruitment",
        //         x: 0.07,
        //         y: 0.5
        //       },
        //       {
        //         font: {
        //           size: 12
        //         },
        //         showarrow: false,
        //         text: "Control",
        //         x: 0.5,
        //         y: 0.5
        //       },
        //       {
        //         font: {
        //           size: 12
        //         },
        //         showarrow: false,
        //         text: "Exploitation",
        //         x: .93,
        //         y: 0.5
        //       }
        //     ],
        //     height: 500,
        //     width: 600,
        //     showlegend: false,
        //     grid: {rows: 1, columns: 3}
        //   };

          // Plotly.newPlot('pie', data, layout);
      
        });

     
      })

    }

createDonut();
optionChanged();