interface TeamMember {
  name: string;
  job: string;
  email: string;
  image: string;
}

interface Department {
  name: string;
  members: TeamMember[];
}

interface Teams {
  [key: string]: Department[];
}

export let teams: Teams =  {
  "egn26": [
    {
      "name": "Core Team",
      "members": [
        {
          "name": "Shiyu Li",
          "job": "Team Captain",
          "email": "shiyu.li@egnition-hamburg.de",
          "image": "assets/images/team/2026/Shiyu_Li.jpg",
        },
        {
          "name": "David Rasuli",
          "job": "Head of Vehicle Dynamics",
          "email": "david.rasuli@egnition-hamburg.de",
          "image": "assets/images/team/2026/David_Rasuli.jpg",
        },
        {
          "name": "Halina Nguyen",
          "job": "Head of Operations",
          "email": "halina.nguyen@egnition-hamburg.de",
          "image": "assets/images/team/2026/Halina_Nguyen.jpg",
        },
        {
          "name": "Merisa Muric",
          "job": "Head of Finance and Statics",
          "email": "merisa.muric@egnition-hamburg.de",
          "image": "assets/images/team/2026/Merisa_Muric.jpg",
        },
        {
          "name": "Jonas Hageböke",
          "job": "Head of HV Electronics",
          "email": "jonas.hageboeke@egnition-hamburg.de",
          "image": "assets/images/team/2026/Jonas_Hageboeke.jpg",
        },
        {
          "name": "Paul Huerkamp",
          "job": "Technical Lead - Electronics and Software",
          "email": "paul.huerkamp@egnition-hamburg.de",
          "image": "assets/images/team/2026/Paul_Huerkamp.jpg",
        },
        {
          "name": "Yann Heuer",
          "job": "Technical Lead - Mechanics",
          "email": "yann.heuer@egnition-hamburg.de",
          "image": "assets/images/team/2026/Yann_Heuer.jpg",
        },
        {
          "name": "Oliver Jungheim",
          "job": "Technical Lead - Manufacturing",
          "email": "oliver.jungheim@egnition-hamburg.de",
          "image": "assets/images/team/2026/Oliver_Jungheim.jpg",
        },
        {
          "name": "Paul Moerler",
          "job": "Head of Chassis",
          "email": "paul.moerler@egnition-hamburg.de",
          "image": "assets/images/team/2026/Paul_Moerler.jpg",
        },
        {
          "name": "Klauss Soriano Martinez",
          "job": "Head of Aerodynamics",
          "email": "klauss.soriano.martinez@egnition-hamburg.de",
          "image": "assets/images/team/2026/Klauss_Soriano_Martinez.jpg",
        },
         {
          "name": "Richard Ulbricht",
          "job": "Head of Powertrain",
          "email": "richard.ulbricht@egnition-hamburg.de",
          "image": "assets/images/team/2026/Richard_Ulbricht.jpg",
        },
         {
          "name": "Leon Becker",
          "job": "Head of LV Electronics",
          "email": "leon-becker@egnition-hamburg.de",
          "image": "assets/images/team/2026/Leon_Becker.jpg",
        },
         {
          "name": "Alexander Schlüter",
          "job": "Head of Embedded Systems",
          "email": "alexander.schlueter@egnition-hamburg.de",
          "image": "assets/images/team/2026/Alexander_Schlüter.jpg",
        },
         {
          "name": "Yannic Hillers",
          "job": "Head of Driverless",
          "email": "yannic.hillers@egnition-hamburg.de",
          "image": "assets/images/team/2026/Yannic_Hillers.jpg",
        }
      ]
    },
    {
      "name": "Finances",
      "members": [
        { "name": "Merisa Muric", "job": "Head of Finance and Statics", "email": "merisa.muric@egnition-hamburg.de", "image": "assets/images/team/2026/Merisa_Muric.jpg" }
      ]
    },
    {
      "name": "Aerodynamics",
      "members": [
        { "name": "Klauss Soriano Martinez", "job": "Head of Aerodynamics", "email": "klauss.soriano.martinez@egnition-hamburg.de", "image": "assets/images/team/2026/Klauss_Soriano_Martinez.jpg"},
        { "name": "Anton Seiler", "job": "DRS", "email": "anton.koehler@egnition-hamburg.de", "image": "assets/images/team/2026/Anton_Köhler.jpg" },
        { "name": "Anton Panka", "job": "Inverter Cooling", "email": "anton.panka@egnition-hamburg.de", "image": "assets/images/team/2026/Anton_Panka.jpg" },
        { "name": "Philipp Dehlke", "job": "Wing Mechanics", "email": "philipp.dehlke@egnition-hamburg.de", "image": "assets/images/team/2026/Philipp_Dehlke.jpg" },
        { "name": "Julian Kessler", "job": "Overall Cooling", "email": "julian.kessler@egnition-hamburg.de", "image": "assets/images/team/2026/Julian_Kessler.jpg" },
        { "name": "Alper Seyran", "job": "Accumulator Cooling", "email": "alper.seyran@egnition-hamburg.de", "image": "assets/images/team/2026/Alper_Seyran.jpg" },
        { "name": "Fatima Abulnaga", "job": "Undertray", "email": "fatima.abul.naga@egnition-hamburg.de", "image": "assets/images/team/2026/Fatima_Abulnaga.jpg" },
        { "name": "Kori Kamau Njonge", "job": "Front Wing", "email": "kori.kamau.njonge@egnition-hamburg.de", "image": "assets/images/team/2026/Kori_Kamau_Njonge.jpg" },
        { "name": "Rishab Sreekumar", "job": "Rear Wing", "email": "rishab.sreekumar@egnition-hamburg.de", "image": "assets/images/team/2026/Rishab_Sreekumar.jpg" },
        { "name": "Luis Ahuis", "job": "Manufacturing", "email": "luis.ahuis@egnition-hamburg.de", "image": "assets/images/team/2026/Luis_Ahuis.jpg" },
        { "name": "Felix Weber", "job": "Manufacturing", "email": "luis.ahuis@egnition-hamburg.de", "image": "assets/images/team/2026/Felix_Weber.jpg" },
      ]
    },
    {
      "name": "Chassis",
      "members": [
        { "name": "Paul Moerler", "job": "Head of Chassis", "email": "paul.moerler@egnition-hamburg.de", "image": "assets/images/team/2026/Paul_Moerler.jpg" },
        { "name": "Gregor Gubisch", "job": "TSAC", "email": "gregor.gubisch@egnition-hamburg.de", "image": "assets/images/team/2026/Gregor_Gubisch.jpg" },
        { "name": "Lukas Frank", "job": "SES", "email": "lukas.frank@egnition-hamburg.de", "image": "assets/images/team/2026/Lukas_Frank.jpg" },
        { "name": "Harnaaz Kaur", "job": "HV Box", "email": "harnaaz.kaur@egnition-hamburg.de", "image": "assets/images/team/2026/Harnaaz_Kaur.jpg" },
        { "name": "Haswanth Kusumanchi", "job": "Seat and Firewall", "email": "haswanth.kusumanchi@egnition-hamburg.de", "image": "assets/images/team/2026/Haswanth_Kusumanchi.jpg" },
        { "name": "Leo Mialki", "job": "Steering Wheel", "email": "leo.mialki@egnition-hamburg.de", "image": "assets/images/team/2026/Leo_Mialki.jpg" },
        { "name": "Magui Castillo", "job": "Mainhoop", "email": "magui.castillo@egnition-hamburg.de", "image": "assets/images/team/2026/Magui_Castillo.jpg" },
        { "name": "Sudenaz Karakus", "job": "LV Box", "email": "sudenaz.karakus@egnition-hamburg.de", "image": "assets/images/team/2026/Sudenaz_Karakus.jpg" },
        { "name": "Simon Jacobs", "job": "Monocoque", "email": "simon.jacobs@egnition-hamburg.de", "image": "assets/images/team/2026/Simon_Jacobs.jpg" },
        { "name": "Amy Grubert", "job": "Monocoque Support", "email": "amy.grubert@egnition-hamburg.de", "image": "assets/images/team/2026/Dummy.jpg" },
        { "name": "Marc Julian Zuther", "job": "Support", "email": "marc.julian.zuther@egnition-hamburg.de", "image": "assets/images/team/2026/Mark_Julian_Zuther.jpg" },
        { "name": "Arne Gärtner", "job": "Support", "email": "arne.gaertner@egnition-hamburg.de", "image": "assets/images/team/2026/Arne_Gärtner.jpg" },
        { "name": "Ayse Ozugurlu", "job": "Support", "email": "ayse.ozugurlu@egnition-hamburg.de", "image": "assets/images/team/2026/Ayse_Ozugurlu.jpg" },
        { "name": "Alexander Brühl", "job": "Support", "email": "alexander.bruehl@egnition-hamburg.de", "image": "assets/images/team/2026/Dummy.jpg" },
      ]
    },
    {
      "name": "Powertrain",
      "members": [
        { "name": "Richard Ulbricht", "job": "Head of Powertrain", "email": "richard.ulbricht@egnition-hamburg.de", "image": "assets/images/team/2026/Richard_Ulbricht.jpg" },
        { "name": "Frederik Meussen", "job": "Brakes", "email": "frederik.meussen@egnition-hamburg.de", "image": "assets/images/team/2026/Frederik_Meussen.jpg" },
        { "name": "Melody Fung", "job": "Emergency Brake System", "email": "chun.tsing.fung@egnition-hamburg.de", "image": "assets/images/team/2026/Melody_Fung.jpg" },
        { "name": "Vivienne Degner", "job": "Wheel Carriers", "email": "vivienne.degner@egnition-hamburg.de", "image": "assets/images/team/2026/Vivienne_Degner.jpg" },
        { "name": "Thorge Rickels", "job": "Wheel Hub and Motors", "email": "throge.rickels@egnition-hamburg.de", "image": "assets/images/team/2026/Thorge_Rickels.jpg" },
        { "name": "Vadim Vdovin", "job": "Wheel Hub and Motors", "email": "vadim.vdovin@egnition-hamburg.de", "image": "assets/images/team/2026/Vadim_Vdovin.jpg" },
        { "name": "Laurent Etzkorn", "job": "Pedals", "email": "laurent.etzkorn@egnition-hamburg.de", "image": "assets/images/team/2026/Lauren_Etzkorn.jpg" },
        { "name": "Deniz Yesilyurt", "job": "Support", "email": "deniz.yesilurt@egnition-hamburg.de", "image": "assets/images/team/2026/Deniz_Yesilyurt.jpg" },
        { "name": "Alinna Shao", "job": "Support", "email": "alinna.shao@egnition-hamburg.de", "image": "assets/images/team/2026/Dummy.jpg" },     
      ]
    },
    {
      "name": "Vehicle Dynamics and Suspension",
      "members": [
        { "name": "David Rasuli", "job": "Head of Vehicle Dynamics", "email": "david.rasuli@egnition-hamburg.de", "image": "assets/images/team/2026/David_Rasuli.jpg" },
        { "name": "Anton Schlegel", "job": "Steering System", "email": "anton.schlegel@egnition-hamburg.de", "image": "assets/images/team/2026/Anton_Schlegel.jpg" },
        { "name": "Bengt Hillenkötter", "job": "Kinematics", "email": "bengt.hillenkoetter@egnition-hamburg.de", "image": "assets/images/team/2026/Bengt_Hillenkötter.jpg" },
        { "name": "Ivar Taylor", "job": "Wheel Suspension", "email": "ivar.taylor@egnition-hamburg.de", "image": "assets/images/team/2026/Ivar_Taylor.jpg" },
        { "name": "Vanshit Mayur Shah", "job": "Lap Time Simulation", "email": "vanshit.shah@egnition-hamburg.de", "image": "assets/images/team/2026/Vanshit_Mayur_Shah.jpg" },
        { "name": "Denis Dumitru Padurariu", "job": "Spring-Damper System", "email": "denis.dumitru.padurariu@gnition-hamburg.de", "image": "assets/images/team/2026/Denis_Dumitru_Padurariu.jpg" },
        { "name": "Siyi Xu", "job": "Test Data Analysis", "email": "siyi.xu@egnition-hamburg.de", "image": "assets/images/team/2026/Siyi_Xu.jpg" },
        { "name": "Marc Bremermann", "job": "Test Data Analysis", "email": "marc.bremermann@egnition-hamburg.de", "image": "assets/images/team/2026/Marc_Bremermann.jpg" },
        { "name": "Christopher Hanson", "job": "Support", "email": "christopher.hanson@egnition-hamburg.de", "image": "assets/images/team/2026/Dummy.jpg" },
        { "name": "Nikolai Malinin", "job": "Support", "email": "nikolai.malinin@egnition-hamburg.de", "image": "assets/images/team/2026/Nikolai_Malinin.jpg" },
      ]
    },
    {
      "name": "HV Electronics",
      "members": [
        { "name": "Jonas Hageböke", "job": "Head of HV Electronics", "email": "jonas.hageboeke@egnition-hamburg.de", "image": "assets/images/team/2026/Jonas_Hageboeke.jpg" },
        { "name": "Kevin Hofmann", "job": "AMS", "email": "kevin.hofmann@egnition-hamburg.de", "image": "assets/images/team/2026/Kevin_Hofmann.jpg" },
        { "name": "Hans Engeln", "job": "Inverters", "email": "hans.engeln@egnition-hamburg.de", "image": "assets/images/team/2026/Hans_Engeln.jpg" },
        { "name": "Luka Dordevic", "job": "ACU", "email": "luka.dordevic@egnition-hamburg.de", "image": "assets/images/team/2026/Dummy.jpg" },
        { "name": "Paul Besser", "job": "Inverter Support", "email": "paul.besser@egnition-hamburg.de", "image": "assets/images/team/2026/Dummy.jpg" },
        { "name": "Justin Boakye", "job": "Support", "email": "justin.boakye@egnition-hamburg.de", "image": "assets/images/team/2026/Dummy.jpg" }, 
         ]
         },
    {
      "name": "LV Electronics",
      "members": [
        { "name": "Leon Becker", "job": "Head of LV Electronics", "email": "leon.becker@egnition-hamburg.de", "image": "assets/images/team/2026/Leon_Becker.jpg" },
        { "name": "Niklas Jung", "job": "Ethernet Converter PCB", "email": "niklas.jung@egnition-hamburg.de", "image": "assets/images/team/2026/Niklas_Jung.jpg" },
        { "name": "Nick Marschner", "job": "Charging Box and PCB", "email": "nick.marschner@egnition-hamburg.de", "image": "assets/images/team/2026/Nick_Marschner.jpg" },
        { "name": "Luca Schloßstein", "job": "TSAL", "email": "luca.schlossstein@egnition-hamburg.de", "image": "assets/images/team/2026/Luca_Schloßstein.jpg" },
        { "name": "Johannes Kreisel", "job": "Vehicle Control Uni (VCU)", "email": "johannes@egnition-hamburg.de", "image": "assets/images/team/2026/Johannes_Kreisel.jpg" },
        { "name": "Jonas Otto", "job": "Display PCB", "email": "jonas.otto@egnition-hamburg.de", "image": "assets/images/team/2026/Jonas_Otto.jpg" },
        { "name": "Juri Albers", "job": "Support", "email": "juri.albers@egnition-hamburg.de", "image": "assets/images/team/2026/Juri_Albers.jpg" },
        { "name": "Jan Pluschke", "job": "Support", "email": "jan.pluschke@egnition-hamburg.de", "image": "assets/images/team/2026/Dummy.jpg" },
      ]
    },
    {
      "name": "Embedded Systems",
      "members": [
        { "name": "Alexander Schlüter", "job": "Head of Embedded Systems", "email": "alexander.schlueter@egnition-hamburg.de", "image": "assets/images/team/2026/Alexander_Schlüter.jpg" },
        { "name": "Lexure Velasco", "job": "Log Manager", "email": "lexure.velasco@egnition-hamburg.de", "image": "assets/images/team/2026/Lexure_Velasco.jpg" },
        { "name": "Biram Abdoulie Jeng", "job": "Dishplay", "email": "biram-abdoulie.jeng@egnition-hamburg.de", "image": "assets/images/team/2026/Biram_Jeng.jpg" },
        { "name": "Floris Wesseloh", "job": "DRS", "email": "floris.wesseloh@egnition-hamburg.de", "image": "assets/images/team/2026/Floris_Wesseloh.jpg" },
        { "name": "Ahmed Khamis", "job": "VCU", "email": "ahmed.khamis@egnition-hamburg.de", "image": "assets/images/team/2026/Dummy.jpg" },
        { "name": "Alireza Salehfar", "job": "Dishplay", "email": "alireza.salehfar@egnition-hamburg.de", "image": "assets/images/team/2026/Alireza_Salehfar.jpg" },
        { "name": "Mohammed Uzair", "job": "Tire Temperature Sensors", "email": "mohamed.uzair@egnition-hamburg.de", "image": "assets/images/team/2026/Mohammed_Uzair.jpg" },
        { "name": "Nikos Vassiliadis", "job": "VCU", "email": "nikos.vassiliadis@egnition-hamburg.de", "image": "assets/images/team/2026/Nikos_Vassiliadis.jpg" },
        { "name": "Sai Adarsh Varma", "job": "Flash Version", "email": "adarsh.varma@egnition-hamburg.de", "image": "assets/images/team/2026/Sai_Adarsh_Varma.jpg" },
        { "name": "Robin Schiefelbein", "job": "VCU", "email": "robin.schiefelbein@egnition-hamburg.de", "image": "assets/images/team/2026/Robin_Schiefelbein.jpg" },
        { "name": "Ty Werner", "job": "VCU", "email": "ty.werner@egnition-hamburg.de", "image": "assets/images/team/2026/Ty_Werner.jpg" },
        { "name": "Jayesh Sawant", "job": "BOB", "email": "jayesh.sawant@egnition-hamburg.de", "image": "assets/images/team/2026/Dummy.jpg" },
        { "name": "Yashu Vivek Venkappa", "job": "Support", "email": "yashu.vivek.venkappa@egnition-hamburg.de", "image": "assets/images/team/2026/Yashu_Vivek.jpg" },
      ]
    },
     {
      "name": "Driverless",
      "members": [
        { "name": "Yannic Hillers", "job": "Head of Driverless", "email": "yannic.hillers@egnition-hamburg.de", "image": "assets/images/team/2026/Yannic_Hillers.jpg" },
        { "name": "Janne Büscher", "job": "Perception and Motion Correction", "email": "janne.buescher@egnition-hamburg.de", "image": "assets/images/team/2026/Janne_Buescher.jpg" },
        { "name": "Felix Oldenburg", "job": "Radar", "email": "felix.oldenburg@egnition-hamburg.de", "image": "assets/images/team/2026/Felix_Oldenburg.jpg" },
        { "name": "Clara Schumacher", "job": "Torque Vectoring and Slip Control", "email": "clara.schumacher@egnition-hamburg.de", "image": "assets/images/team/2026/Clara_Schumacher.jpg" },
        { "name": "Ferdinand Grenzing", "job": "Vehicle Model", "email": "ferdinand.grenzing@egnition-hamburg.de", "image": "assets/images/team/2026/Ferdinand_Grenzing.jpg" },
        { "name": "Laman Ahmadzada", "job": "SLAM", "email": "laman.ahmadzada@egnition-hamburg.de", "image": "assets/images/team/2026/Laman_Ahmadzada.jpg" },
        { "name": "Pascal Neuenfeldt", "job": "Model Predictive Control", "email": "pascal.neuenfeldt@egnition-hamburg.de", "image": "assets/images/team/2026/Pascal_Neuenfeldt.jpg" },
        { "name": "Ulas Eren Kamis", "job": "CI/CD Pipeline", "email": "ulas.kamis@egnition-hamburg.de", "image": "assets/images/team/2026/Ulas_Kamis.jpg" },
        { "name": "Yavuz Alp Aydin", "job": "Planning and Controls Simulator", "email": "yavuz.alp.aydin@egnition-hamburg.de", "image": "assets/images/team/2026/Yavuz_Alp_Aydin.jpg" },
        { "name": "Leo Lindenberg", "job": "Data Validation", "email": "leo.lindenberg@egnition-hamburg.de", "image": "assets/images/team/2026/Leo_Lindenberg.jpg" },
        { "name": "Yaw Obeng", "job": "Test Automation", "email": "yaw.obeng@egnition-hamburg.de", "image": "assets/images/team/2026/Yaw_Obeng.jpg" },
        { "name": "Tim Zielberg", "job": "Support", "email": "tim.zielberg@egnition-hamburg.de", "image": "assets/images/team/2026/Dummy.jpg" },
        { "name": "Jeremiasz Skorupski", "job": "Support", "email": "jeremiasz.skorupski@egnition-hamburg.de", "image": "assets/images/team/2026/Dummy.jpg" },
      ]
    },
    {
      "name": "Operations",
      "members": [
        { "name": "Halina Nguyen", "job": "Head of Operations", "email": "halina.nguyen@egnition-hamburg.de", "image": "assets/images/team/2026/Halina_Nguyen.jpg" },
        { "name": "Merisa Muric", "job": "Head of Finance and Statics", "email": "merisa.muric@egnition-hamburg.de", "image": "assets/images/team/2026/Merisa_Muric.jpg" },
        { "name": "Tim Gerlach", "job": "Sponsoring", "email": "tim.gerlach@egnition-hamburg.de", "image": "assets/images/team/2026/Tim_Gerlach.jpg" },
        { "name": "Juliana Kanj", "job": "Sponsoring", "email": "juliana.kanj@egnition-hamburg.de", "image": "assets/images/team/2026/Juliana_Kanj.jpg" },
        { "name": "Shramik Kamath", "job": "Photography and Videography", "email": "shramik.kamath@egnition-hamburg.de", "image": "assets/images/team/2026/Shramik_Kamath.jpg" },
        { "name": "Christina Büttner", "job": "Print Media and Event Organization", "email": "christina.buettner@egnition-hamburg.de", "image": "assets/images/team/2026/Christina_Büttner.jpg" },
        { "name": "Ngoc Anh Nguyen", "job": "Videography and Video Production", "email": "ngoc.anh@egnition-hamburg.de", "image": "assets/images/team/2026/Ngoc_Anh_Nguyen.jpg" },
        { "name": "Merima Muric", "job": "Template Design", "email": "merima.muric@egnition-hamburg.de", "image": "assets/images/team/2026/Merima_Muric.jpg" },
        { "name": "Roshan Srinivasan", "job": "Website", "email": "roshan.srinivasan@egnition-hamburg.de", "image": "assets/images/team/2026/Roshan_Srinivasan.jpg" },
        { "name": "Ayesha Batool", "job": "Support", "email": "ayesha.batool@egnition-hamburg.de", "image": "assets/images/team/2026/Ayesha_Batool.jpg" },
        { "name": "Rushikesh Gholap", "job": "Design", "email": "rushikesh.gholap@egnition-hamburg.de", "image": "assets/images/team/2026/Rushikesh_Gholap.jpg" }
      ]
    },
    {
      "name": "Statics",
      "members": [
       { "name": "Merisa Muric", "job": "Head of Finance and Statics", "email": "merisa.muric@egnition-hamburg.de", "image": "assets/images/team/2026/Merisa_Muric.jpg" },
        { "name": "Tim Gerlach", "job": "Business Plan Presentation", "email": "tim.gerlach@egnition-hamburg.de", "image": "assets/images/team/2026/Tim_Gerlach.jpg" },
        { "name": "Juliana Kanj", "job": "Business Plan Presentation", "email": "juliana.kanj@egnition-hamburg.de", "image": "assets/images/team/2026/Juliana_Kanj.jpg" },
        { "name": "Ayesha Batool", "job": "Business Plan Presentation", "email": "ayesha.batool@egnition-hamburg.de", "image": "assets/images/team/2026/Ayesha_Batool.jpg" },
        { "name": "Rushikesh Gholap", "job": "Business Plan Presentation", "email": "rushikesh.gholap@egnition-hamburg.de", "image": "assets/images/team/2026/Rushikesh_Gholap.jpg" },
        { "name": "Shramik Kamath", "job": "Business Plan Presentation", "email": "shramik.kamath@egnition-hamburg.de", "image": "assets/images/team/2026/Dummy.jpg" },
        { "name": "Laurent Etzkorn", "job": "Business Plan Presentation", "email": "laurent.etzkorn@egnition-hamburg.de", "image": "assets/images/team/2026/Lauren_Etzkorn.jpg" },
        { "name": "Merima Muric", "job": "Cost and Manufacturing Report", "email": "merima.muric@egnition-hamburg.de", "image": "assets/images/team/2026/Merima_Muric.jpg" },
        { "name": "Biram Abdoulie Jeng", "job": "Cost and Manufacturing Report", "email": "biram-abdoulie.jeng@egnition-hamburg.de", "image": "assets/images/team/2026/Biram_Jeng.jpg" },
        { "name": "Vanshit Mayur Shah", "job": "Cost and Manufacturing Report", "email": "vanshit.shah@egnition-hamburg.de", "image": "assets/images/team/2026/Vanshit_Mayur_Shah.jpg" },
        { "name": "Klauss Soriano Martinez", "job": "CCBOM Support", "email": "klauss.soriano.martinez@egnition-hamburg.de", "image": "assets/images/team/2026/Klauss_Soriano_Martinez.jpg" },
        { "name": "Jonas Hageböke", "job": "CCBOM Support", "email": "jonas.hageboeke@egnition-hamburg.de", "image": "assets/images/team/2026/Jonas_Hageboeke.jpg" },
        { "name": "Richard Ulbricht", "job": "CCBOM Support", "email": "richard.ulbricht@egnition-hamburg.de", "image": "assets/images/team/2026/Richard_Ulbricht.jpg" },
        { "name": "Paul Moerler", "job": "CCBOM Support", "email": "paul.moerler@egnition-hamburg.de", "image": "assets/images/team/2026/Paul_Moerler.jpg" },
        { "name": "Yann Heuer", "job": "Engineering Design Report", "email": "yann.heuer@egnition-hamburg.de", "image": "assets/images/team/2026/Yann_Heuer.jpg" },
        { "name": "Paul Huerkamp", "job": "Engineering Design Report", "email": "paul.huerkamp@egnition-hamburg.de", "image": "assets/images/team/2026/Paul_Huerkamp.jpg" },
        { "name": "Shiyu Li", "job": "Engineering Design Presentation", "email": "shiyu.li@egnition-hamburg.de", "image": "assets/images/team/2026/Shiyu_Li.jpg" },
      ]
    },
         {
      "name": "Driver",
      "members": [
       { "name": "Ferdinand Grenzing", "job": "Driver", "email": "ferdinand.grenzing@egnition-hamburg.de", "image": "assets/images/team/2026/Ferdinand_Grenzing.jpg" },
       { "name": "Paul Huerkamp", "job": "Driver", "email": "paul.huerkamp@egnition-hamburg.de", "image": "assets/images/team/2026/Paul_Huerkamp.jpg" },
        { "name": "Ty Werner", "job": "Driver", "email": "ty.werner@egnition-hamburg.de", "image": "assets/images/team/2026/Ty_Werner.jpg" },     
        { "name": "Vadim Vdovin", "job": "Driver", "email": "vadim.vdovin@egnition-hamburg.de", "image": "assets/images/team/2026/Vadim_Vdovin.jpg" },
        { "name": "Marc Julian Zuther", "job": "Driver", "email": "marc.julian.zuther@egnition-hamburg.de", "image": "assets/images/team/2026/Mark_Julian_Zuther.jpg" },
        { "name": "Philipp Dehlke", "job": "Driver", "email": "philipp.dehlke@egnition-hamburg.de", "image": "assets/images/team/2026/Philipp_Dehlke.jpg" },
      ]
    }


  ],
  "egn25": [
    {
      "name": "Core Team",
      "members": [
        {
          "name": "Johannes Schröder",
          "job": "Team Captain",
          "email": "johannes.schroeder@egnition-hamburg.de",
          "image": "assets/images/team/2025/johannes-schroeder.jpg",
        },
        {
          "name": "Laurent Etzkorn",
          "job": "Operations Lead",
          "email": "laurent.etzkorn@egnition-hamburg.de",
          "image": "assets/images/team/2025/laurent-etzkorn.jpg",
        },
        {
          "name": "Fujia Li",
          "job": "Technical Lead",
          "email": "fujia.li@egnition-hamburg.de",
          "image": "assets/images/team/2025/fujia-li.jpg",
        },
        {
          "name": "Merisa Muric",
          "job": "Head of Finance and Operations",
          "email": "merisa.muric@egnition-hamburg.de",
          "image": "assets/images/team/2025/merisa-muric.jpg",
        },
        {
          "name": "Lukas Frank",
          "job": "Head of Chassis",
          "email": "lukas.frank@egnition-hamburg.de",
          "image": "assets/images/team/2025/lukas-frank.jpg",
        },
        {
          "name": "Paul Huerkamp",
          "job": "Head of Embedded Systems",
          "email": "paul.huerkamp@egnition-hamburg.de",
          "image": "assets/images/team/2025/paul-huerkamp.jpg",
        },
        {
          "name": "Jonas Hageböke",
          "job": "Head of Electronics",
          "email": "jonas.hageboeke@egnition-hamburg.de",
          "image": "assets/images/team/2025/jonas-hageboeke.jpg",
        },
        {
          "name": "Nikolaus Wesner",
          "job": "Head of Aerodynamics",
          "email": "nikolaus.wesner@egnition-hamburg.de",
          "image": "assets/images/team/2025/nikolaus-wesner.jpg",
        },
        {
          "name": "Vivienne Degner",
          "job": "Head of Performance",
          "email": "vivienne.degner@egnition-hamburg.de",
          "image": "assets/images/team/2025/vivienne-degner.jpg",
        },
        {
          "name": "Henry Paegel",
          "job": "Head of Driverless Software",
          "email": "henry.paegel@egnition-hamburg.de",
          "image": "assets/images/team/2025/henry-paegel.jpg",
        }
      ]
    },
    {
      "name": "Finances",
      "members": [
        { "name": "Merisa Muric", "job": "Head of Finance and Operations", "email": "merisa.muric@egnition-hamburg.de", "image": "assets/images/team/2025/merisa-muric.jpg" }
      ]
    },
    {
      "name": "Aerodynamics",
      "members": [
        { "name": "Nikolaus Wesner", "job": "Head of Aerodynamics", "email": "nikolaus.wesner@egnition-hamburg.de", "image": "assets/images/team/2025/nikolaus-wesner.jpg"},
        { "name": "Anton Köhler", "job": "Sensor Mechanics", "email": "anton.koehler@egnition-hamburg.de", "image": "assets/images/team/2025/anton-koehler.jpg" },
        { "name": "Anton Panka", "job": "Cooling", "email": "anton.panka@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Charan Sai", "job": "Cooling Simulation", "email": "charan.sai@egnition-hamburg.de", "image": "assets/images/team/2025/charan-sai.jpg" },
        { "name": "Henning Ripke", "job": "Wing Mechanics", "email": "henning.ripke@egnition-hamburg.de", "image": "assets/images/team/2025/henning-ripke.jpg" },
        { "name": "Henri Hoop", "job": "Rearwing", "email": "henri.hoop@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Jan Dittloff", "job": "Simulation", "email": "jan.dittloff@egnition-hamburg.de", "image": "assets/images/team/2025/jan-dittloff.jpg" },
        { "name": "Khevish Gya", "job": "Cooling", "email": "khevish.gya@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Kjell Reese", "job": "Heckdiff", "email": "kjell.reese@egnition-hamburg.de", "image": "assets/images/team/2025/kjell-reese.jpg" },
        { "name": "Klauss Martinez", "job": "Undertray", "email": "klauss.martinez@egnition-hamburg.de", "image": "assets/images/team/2025/klauss-martinez.jpg" },
        { "name": "Liam Hausmann", "job": "DRS", "email": "liam.hausmann@egnition-hamburg.de", "image": "assets/images/team/2025/liam-hausmann.jpg" },
        { "name": "Oliver Hermann", "job": "Cooling", "email": "oliver.hermann@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Oliver Jungheim", "job": "Simulation", "email": "oliver.jungheim@egnition-hamburg.de", "image": "assets/images/team/2025/oliver-jungheim.jpg" },
        { "name": "Philipp Dehlke", "job": "Wing Mechanics", "email": "philipp.dehlke@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Solene Mayerhofer", "job": "Frontwing", "email": "solene.mayerhofer@egnition-hamburg.de", "image": "assets/images/team/2025/solene-meyerhofer.jpg" }
      ]
    },
    {
      "name": "Electronics",
      "members": [
        { "name": "Jonas Hageböke", "job": "Head of Electronics", "email": "jonas.hageboeke@egnition-hamburg.de", "image": "assets/images/team/2025/jonas-hageboeke.jpg" },
        { "name": "Luca Lehmberg", "job": "Testsensorboard", "email": "luca.lehmberg@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Felix Schulz", "job": "HV Box", "email": "felix.schulz@egnition-hamburg.de", "image": "assets/images/team/2025/felix-schulz.jpg" },
        { "name": "Clara de la Fuente Carmona", "job": "BSPD", "email": "clara.fuente@egnition-hamburg.de", "image": "assets/images/team/2025/clara-de-la-fuente-carmona.jpg" },
        { "name": "Niklas Galjan", "job": "Lights", "email": "niklas.galjan@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Hans Engeln", "job": "Driver Interface", "email": "hans.engeln@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Johannes Schmidt-Brücken", "job": "Kabelbaum", "email": "johannes.schmidt-bruecken@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Leon Becker", "job": "Kabelbaum", "email": "leon.becker@egnition-hamburg.de", "image": "assets/images/team/2025/leon-becker.jpg" },
        { "name": "Luca Schloßstein", "job": "Assistance", "email": "luca.schlossstein@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Cedric Adler", "job": "Assistance", "email": "cedric.adler@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Luka Djordjevic", "job": "Assistance", "email": "luka.dordevic@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
      ]
    },
    {
      "name": "Performance",
      "members": [
        { "name": "Vivienne Degner", "job": "Head of Performance", "email": "vivienne.degner@egnition-hamburg.de", "image": "assets/images/team/2025/vivienne-degner.jpg" },
        { "name": "Felix Hoffmann", "job": "Transmission", "email": "felix.hoffmann@egnition-hamburg.de", "image": "assets/images/team/2025/felix-hoffmann-.jpg" },
        { "name": "Marco Stangenberg", "job": "Transmission", "email": "marco.stangenberg@egnition-hamburg.de", "image": "assets/images/team/2025/marco-stangenberg.jpg" },
        { "name": "David Rasuli", "job": "Laptime Simulation", "email": "david.rasuli@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Ivar Gonzales Taylor", "job": "Brakes", "email": "ivar.gonzales-taylor@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Joe S.", "job": "Steering", "email": "", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Sebastian Sprössel", "job": "Wheel Carrier", "email": "sebastian.sproessel@egnition-hamburg.de", "image": "assets/images/team/2025/sebastian-sproessel.jpg" },
        { "name": "Rushikesh Gholap", "job": "SDS", "email": "rushikesh.gholap@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Paul Stöcker", "job": "Steering", "email": "paul.stoecker@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Floris Wesseloh", "job": "Pedals", "email": "floris.wesseloh@egnition-hamburg.de", "image": "assets/images/team/2025/floris-wesseloh.jpg" },
        { "name": "Thyra Fuß", "job": "Wheel Suspension", "email": "thyra.fuss@egnition-hamburg.de", "image": "assets/images/team/2025/thyra-fus.jpg" },
        { "name": "Richard Ulbricht", "job": "Brakes", "email": "richard.ulbricht@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Clara Schumacher", "job": "Laptime Simulation", "email": "clara.schumacher@egnition-hamburg.de", "image": "assets/images/team/2025/clara-schumacher.jpg" }
      ]
    },
    {
      "name": "Embedded Systems",
      "members": [
        { "name": "Paul Huerkamp", "job": "Head of Embedded Systems", "email": "paul.huerkamp@egnition-hamburg.de", "image": "assets/images/team/2025/paul-huerkamp.jpg" },
        { "name": "Max Knobelsdorf", "job": "Sensorboard", "email": "max.knobelsdorf@egnition-hamburg.de", "image": "assets/images/team/2025/max-knobelsdorf.jpg" },
        { "name": "Bengt Hillenkötter", "job": "Testsensorboard", "email": "bengt.hillenkoetter@egnition-hamburg.de", "image": "assets/images/team/2025/bengt-hillenkoetter.jpg" },
        { "name": "Mohammadhossein Pourassad", "job": "Boardcomputer", "email": "mohammadhossein.pourassad@egnition-hamburg.de", "image": "assets/images/team/2025/mohammadhossein-pourassad.jpg" },
        { "name": "Harshitha Viswanath", "job": "ACU", "email": "harshitha.viswanath@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Alexander Schlüter", "job": "Dishplay", "email": "alexander.schlueter@egnition-hamburg.de", "image": "assets/images/team/2025/alexander-schlüter.jpg" },
        { "name": "Torben Lehmann", "job": "Telemetrie", "email": "torben.lehmann@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Jeremy Friedhoff", "job": "Assistance", "email": "jeremy.friedhoff@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" }
      ]
    },
    {
      "name": "Chassis",
      "members": [
        { "name": "Lukas Frank", "job": "Head of Chassis", "email": "lukas.frank@egnition-hamburg.de", "image": "assets/images/team/2025/lukas-frank.jpg" },
        { "name": "Melody Fung", "job": "SES", "email": "chun.tsing.fung@egnition-hamburg.de", "image": "assets/images/team/2025/melody-fung.jpg" },
        { "name": "Laman Ahmadzada", "job": "Monocoque", "email": "laman.ahmadzada@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Paul Moerler", "job": "TSAC", "email": "paul.moerler@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Phaneendra Shankara Prasad", "job": "Seat", "email": "phaneendra.shankara-prasad@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Prathveraj Shetty", "job": "Simulation", "email": "prathveraj.shetty@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Marc Julian Zuther", "job": "Mainhoop", "email": "marc.julian.zuther@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Sascha Li", "job": "Steering Wheel", "email": "shiyu.li@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Mahendra Jambagi", "job": "Simulation", "email": "mahendra.bhimappa.jambagi@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Yann Heuer", "job": "Monocoque", "email": "yann.heuer@egnition-hamburg.de", "image": "assets/images/team/2025/yann-heuer.jpg" }
      ]
    },
    {
      "name": "Driverless Software",
      "members": [
        { "name": "Henry Paegel", "job": "Head of Driverless Software", "email": "henry.paegel@egnition-hamburg.de", "image": "assets/images/team/2025/henry-paegel.jpg" },
        { "name": "Ferdinand Grenzing", "job": "State Estimation", "email": "ferdinand.grenzing@egnition-hamburg.de", "image": "assets/images/team/2025/ferdinand-grenzing.jpg" },
        { "name": "Pascal Neuenfeldt", "job": "SLAM", "email": "pascal.neuenfeldt@egnition-hamburg.de", "image": "assets/images/team/2025/pascal-neuenfeldt.jpg" },
        { "name": "Johannes Kreisel", "job": "Database", "email": "johannes@egnition-hamburg.de", "image": "assets/images/team/2025/johannes-kreisel.jpg" },
        { "name": "Ulas Kamis", "job": "Acceleration", "email": "ulas.kamis@egnition-hamburg.de", "image": "assets/images/team/2025/ulas-kamis.jpg" },
        { "name": "Jeremiasz Skorupski", "job": "Perception", "email": "jeremiasz.skorupski@egnition-hamburg.de", "image": "assets/images/team/2025/jeremiasz-skorupski.jpg" },
        { "name": "Halina Nguyen", "job": "Path Optimizer", "email": "halina.nguyen@egnition-hamburg.de", "image": "assets/images/team/2025/halina-nguyen.jpg" },
        { "name": "Luis Binne", "job": "Database", "email": "luis.binne@egnition-hamburg.de", "image": "assets/images/team/2025/luis-binne.jpg" },
        { "name": "Tim Zielberg", "job": "Skidpad", "email": "tim.zielberg@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Ananya Saha", "job": "Controls", "email": "ananya.saha@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Yannic Hillers", "job": "Support", "email": "yannic.hillers@egnition-hamburg.de", "image": "assets/images/team/2025/yannic-hillers.jpg" },
        { "name": "Alp Aydin", "job": "Support", "email": "alp.aydin@egnition-hamburg.de", "image": "assets/images/team/2025/alp-aydin.jpg" },
        { "name": "Bharath Kumas", "job": "Support", "email": "bharath.kumas@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" }
      ]
    },
    {
      "name": "Operations",
      "members": [
        { "name": "Laurent Etzkorn", "job": "Head of Operations", "email": "laurent.etzkorn@egnition-hamburg.de", "image": "assets/images/team/2025/laurent-etzkorn.jpg" },
        { "name": "Merisa Muric", "job": "Head of Finance and Operations", "email": "merisa.muric@egnition-hamburg.de", "image": "assets/images/team/2025/merisa-muric.jpg" },
        { "name": "Biram-Abdoulie Jeng", "job": "Editing", "email": "biram-abdoulie.jeng@egnition-hamburg.de", "image": "assets/images/team/2025/biram-abdoulie-jeng.jpg" },
        { "name": "Torben Salihi", "job": "Videography", "email": "torben.salihi@egnition-hamburg.de", "image": "assets/images/team/2025/torben-salihi.jpg" },
        { "name": "Harshali Yeram", "job": "Carbon Cost", "email": "harshali.yeram@egnition-hamburg.de", "image": "assets/images/team/2025/placeholder.jpg" },
        { "name": "Christina Büttner", "job": "Newsletter", "email": "christina.buettner@egnition-hamburg.de", "image": "assets/images/team/2025/christina-büttner.jpg" },
        { "name": "Leander Wollweber", "job": "Videoediting", "email": "leander.wollweber@egnition-hamburg.de", "image": "assets/images/team/2025/leander-wollweber.jpg" },
        { "name": "Shramik Kamath", "job": "PR & Sponsoring", "email": "shramik.kamath@egnition-hamburg.de", "image": "assets/images/team/2025/shramik-kamath.jpg" },
        { "name": "Sabrina Schumacher", "job": "Graphic Design", "email": "sabrina.schumacher@egnition-hamburg.de", "image": "assets/images/team/2025/sabrina-schumacher.jpg" },
        { "name": "Amy Grubert", "job": "Support", "email": "amy.grubert@egnition-hamburg.de", "image": "assets/images/team/2025/amy-grubert.jpg" }
      ]
    }

  ],
  "egn24": [
    {
      "name": "Core Team",
      "members": [
        {
          "name": "Solène Mayerhofer",
          "job": "Team Captain",
          "email": "solene.mayerhofer@egnition-hamburg.de",
          "image": "assets/images/team/2024/solene-meyerhofer.jpg"
        },
        {
          "name": "Jan Lachmann",
          "job": "Head of Marketing",
          "email": "jan.lachmann@egnition-hamburg.de",
          "image": "assets/images/team/2024/jan-lachmann.jpg"
        },
        {
          "name": "Dominik Hanke",
          "job": "Technical Lead",
          "email": "dominik.hanke@egnition-hamburg.de",
          "image": "assets/images/team/2024/dominik-hanke.jpg"
        },
        {
          "name": "Wilhelm Pantaleon Lorenty",
          "job": "Head of Finance",
          "email": "wilhelm-pantaleon.lorenty@egnition-hamburg.de",
          "image": "assets/images/team/2024/wilhelm-pantaleon-lorenty.jpg"
        },
        {
          "name": "Marvin Drabent",
          "job": "Head of Chassis",
          "email": "marvin.drabent@egnition-hamburg.de",
          "image": "assets/images/team/2024/marvin-drabent.jpg"
        },
        {
          "name": "Christian Sühl",
          "job": "Head of Electronics",
          "email": "christian.suehl@egnition-hamburg.de",
          "image": "assets/images/team/2024/christian-suehl.jpg"
        },
        {
          "name": "Torben Lehmann",
          "job": "Head of Embedded Systems",
          "email": "torben.lehmann@egnition-hamburg.de",
          "image": "assets/images/team/2024/torben-lehmann.jpg"
        },
        {
          "name": "Henri Hoop",
          "job": "Head of Aerodynamics",
          "email": "henri.hoop@egnition-hamburg.de",
          "image": "assets/images/team/2024/henri-hoop.jpg"
        },
        {
          "name": "Felix Hoffmann",
          "job": "Head of Performance",
          "email": "felix.hoffmann@egnition-hamburg.de",
          "image": "assets/images/team/2024/felix-hoffmann.jpg"
        },
        {
          "name": "Ferdinand Grenzing",
          "job": "Head of Driverless",
          "email": "ferdinand.grenzing@egnition-hamburg.de",
          "image": "assets/images/team/2024/ferdinand-grenzing.jpg"
        }
      ]
    },
    {
      "name": "Finances",
      "members": [
        {
          "name": "Wilhelm Pantaleon Lorenty",
          "job": "Head of Finance",
          "email": "wilhelm-pantaleon.lorenty@egnition-hamburg.de",
          "image": "assets/images/team/2024/wilhelm-pantaleon-lorenty.jpg"
        }
      ]
    },
    {
      "name": "Marketing",
      "members": [
        {
          "name": "Jan Lachmann",
          "job": "Head of Marketing",
          "email": "jan.lachmann@egnition-hamburg.de",
          "image": "assets/images/team/2024/jan-lachmann.jpg"
        },
        {
          "name": "Anjers Kelm",
          "job": "Support",
          "email": "anjers.kelm@egnition-hamburg.de",
          "image": "assets/images/team/2024/placeholder.jpg"
        },
        {
          "name": "Christina Büttner",
          "job": "PR & Sponsoring & Eventmanagement",
          "email": "christina.buettner@egnition-hamburg.de",
          "image": "assets/images/team/2024/christina-buettner.jpg"
        },
        {
          "name": "Daniel Vallejo",
          "job": "Support",
          "email": "daniel.vallejo@egnition-hamburg.de",
          "image": "assets/images/team/2024/placeholder.jpg"
        },
        {
          "name": "Laurent Etzkorn",
          "job": "PR & Sponsoring & Website",
          "email": "laurent.etzkorn@egnition-hamburg.de",
          "image": "assets/images/team/2024/laurent-etzkorn.jpg"
        },
        {
          "name": "Leander Wollweber",
          "job": "Social Media",
          "email": "leander.wollweber@egnition-hamburg.de",
          "image": "assets/images/team/2024/leander-wollweber.jpg"
        },
        {
          "name": "Merisa Muric",
          "job": "PR & Operations Strategy",
          "email": "merisa.muric@egnition-hamburg.de",
          "image": "assets/images/team/2024/merisa-muric.jpg"
        },
        {
          "name": "Torben Salihi",
          "job": "Graphic Design & Social Media & Videography",
          "email": "torben.salihi@egnition-hamburg.de",
          "image": "assets/images/team/2024/torben-salihi.jpg"
        }
      ]
    },
    {
      "name": "Aerodynamics",
      "members": [
        {
          "name": "Henri Hoop",
          "job": "Head of Aerodynamics",
          "email": "henri.hoop@egnition-hamburg.de",
          "image": "assets/images/team/2024/henri-hoop.jpg"
        },
        {
          "name": "Anton Panka",
          "job": "Cooling",
          "email": "anton.panka@egnition-hamburg.de",
          "image": "assets/images/team/2024/anton-panka.jpg"
        },
        {
          "name": "Carl Constantin Böhning",
          "job": "Wing Mechanics",
          "email": "carl.boehning@egnition-hamburg.de",
          "image": "assets/images/team/2024/carl-constantin-boehning.jpg"
        },
        {
          "name": "Erik Fischer",
          "job": "CFD",
          "email": "erik.fischer@egnition-hamburg.de",
          "image": "assets/images/team/2024/erik-fischer.jpg"
        },
        {
          "name": "Jan Dittloff",
          "job": "Bullwings and Covers",
          "email": "jan.dittloff@egnition-hamburg.de",
          "image": "assets/images/team/2024/jan-dittloff.jpg"
        },
        {
          "name": "Johannes Schröder",
          "job": "Undertray",
          "email": "johannes.schroeder@egnition-hamburg.de",
          "image": "assets/images/team/2024/johannes-schroeder.jpg"
        },
        {
          "name": "Lex Hoffmann",
          "job": "Frontwing",
          "email": "lex.hoffmann@egnition-hamburg.de",
          "image": "assets/images/team/2024/lex-hoffmann.jpg"
        },
        {
          "name": "Nikolaus Wesner",
          "job": "Tire Skirts",
          "email": "nikolaus.wesner@egnition-hamburg.de",
          "image": "assets/images/team/2024/nikolaus-wesner.jpg"
        },
        {
          "name": "William Hsu",
          "job": "Rearwing",
          "email": "william.hsu@egnition-hamburg.de",
          "image": "assets/images/team/2024/william-hsu.jpg"
        },
        {
          "name": "Yu-Tung Yang",
          "job": "Rearwing",
          "email": "yu-tung.yang@egnition-hamburg.de",
          "image": "assets/images/team/2024/yu-tung-yang.jpg"
        }
      ]
    },
    {
      "name": "Electronics",
      "members": [
        {
          "name": "Christian Sühl",
          "job": "Head of Electronics",
          "email": "christian.suehl@egnition-hamburg.de",
          "image": "assets/images/team/2024/christian-suehl.jpg"
        },
        {
          "name": "Amirhossein S.",
          "job": "Sensorboard",
          "email": "amirhossein.saberihosseinabad@egnition-hamburg.de",
          "image": "assets/images/team/2024/placeholder.jpg"
        },
        {
          "name": "Clara de la Fuente Carmona",
          "job": "Support",
          "email": "clara.fuente@egnition-hamburg.de",
          "image": "assets/images/team/2024/clara-de-la-fuente-carmona.jpg"
        },
        {
          "name": "Hanieh Charmgar",
          "job": "Wiring Harness Support",
          "email": "hanieh.charmgar@egnition-hamburg.de",
          "image": "assets/images/team/2024/placeholder.jpg"
        },
        {
          "name": "Jaffar Ibrahim",
          "job": "Dishplay",
          "email": "jaffar.ibrahim@egnition-hamburg.de",
          "image": "assets/images/team/2024/jaffar-ibrahim.jpg"
        },
        {
          "name": "Janik Bach",
          "job": "ACU & Accumulator",
          "email": "janik.bach@egnition-hamburg.de",
          "image": "assets/images/team/2024/janik-bach.jpg"
        },
        {
          "name": "Jannik Johannsen",
          "job": "Engine test bench & Lights",
          "email": "jannik.johannsen@egnition-hamburg.de",
          "image": "assets/images/team/2024/jannik-johannsen.jpg"
        },
        {
          "name": "Leonard Schauer",
          "job": "Accumulator",
          "email": "leonard.schauer@egnition-hamburg.de",
          "image": "assets/images/team/2024/leonard-schauer.jpg"
        },
        {
          "name": "Luca Lehmberg",
          "job": "Support",
          "email": "luca.lehmberg@egnition-hamburg.de",
          "image": "assets/images/team/2024/placeholder.jpg"
        },
        {
          "name": "Paul Erb",
          "job": "BSPD",
          "email": "paul.erb@egnition-hamburg.de",
          "image": "assets/images/team/2024/paul-erb.jpg"
        },
        {
          "name": "Phillip Hatje",
          "job": "Fuseboard",
          "email": "phillip.hatje@egnition-hamburg.de",
          "image": "assets/images/team/2024/phillip-hatje.jpg"
        },
        {
          "name": "Sediq Abdullah",
          "job": "Support",
          "email": "sediq.abdullah@egnition-hamburg.de",
          "image": "assets/images/team/2024/sediq-abdullah.jpg"
        },
        {
          "name": "Timon Suhk",
          "job": "AMS & Accumulator",
          "email": "timon.suhk@egnition-hamburg.de",
          "image": "assets/images/team/2024/timon-suhk.jpg"
        },
        {
          "name": "Tim Schubert",
          "job": "Wiring Harness",
          "email": "luca.lehmberg@egnition-hamburg.de",
          "image": "assets/images/team/2024/tim-schubert.jpg"
        }
      ]
    },
    {
      "name": "Performance",
      "members": [
        {
          "name": "Felix Hoffmann",
          "job": "Head of Performance",
          "email": "felix.hoffmann@egnition-hamburg.de",
          "image": "assets/images/team/2024/felix-hoffmann.jpg"
        },
        {
          "name": "David Rasuli",
          "job": "Spring-Damper System",
          "email": "david.rasuli@egnition-hamburg.de",
          "image": "assets/images/team/2024/david-rasuli.jpg"
        },
        {
          "name": "Elton Dias",
          "job": "Suspension",
          "email": "elton.dias@egnition-hamburg.de",
          "image": "assets/images/team/2024/elton-dias.jpg"
        },
        {
          "name": "Emil Stahl",
          "job": "Kinematics",
          "email": "emil.stahl@egnition-hamburg.de",
          "image": "assets/images/team/2024/emil-stahl.jpg"
        },
        {
          "name": "Jaikaar Singh",
          "job": "Laptime",
          "email": "jaikaar.singh@egnition-hamburg.de",
          "image": "assets/images/team/2024/jaikaar-singh.jpg"
        },
        {
          "name": "Joe Saenz",
          "job": "Steering",
          "email": "joe.saenz@egnition-hamburg.de",
          "image": "assets/images/team/2024/placeholder.jpg"
        },
        {
          "name": "Kerem Alp Kilicarslan",
          "job": "Motor & Gearbox",
          "email": "keremalp.kilicarslan@egnition-hamburg.de",
          "image": "assets/images/team/2024/karam-alp-kilicarslan.jpg"
        },
        {
          "name": "Kolja Böer",
          "job": "Pedals",
          "email": "kolja.boeer@egnition-hamburg.de",
          "image": "assets/images/team/2024/kolja-boeer.jpg"
        },
        {
          "name": "Sebastian Sprössel",
          "job": "Wheel Carrier",
          "email": "sebastian.sproessel@egnition-hamburg.de",
          "image": "assets/images/team/2024/sebastian-sproessel.jpg"
        },
        {
          "name": "Thorben Ehlers",
          "job": "Brakes",
          "email": "thorben.ehlers@egnition-hamburg.de",
          "image": "assets/images/team/2024/thorben-ehlers.jpg"
        }
      ]
    },
    {
      "name": "Embedded Systems",
      "members": [
        {
          "name": "Torben Lehmann",
          "job": "Head of Embedded Systems",
          "email": "torben.lehmann@egnition-hamburg.de",
          "image": "assets/images/team/2024/torben-lehmann.jpg"
        },
        {
          "name": "David Daoud Masloub",
          "job": "rGSS & TV",
          "email": "david.masloub@egnition-hamburg.de",
          "image": "assets/images/team/2024/david-daoud-masloub.jpg"
        },
        {
          "name": "Gabriele Lacchin",
          "job": "ACU",
          "email": "gabriele.lacchin@egnition-hamburg.de",
          "image": "assets/images/team/2024/placeholder.jpg"
        },
        {
          "name": "Jaffar Ibrahim",
          "job": "Dishplay",
          "email": "jaffar.ibrahim@egnition-hamburg.de",
          "image": "assets/images/team/2024/jaffar-ibrahim.jpg"
        },
        {
          "name": "Phillip Hatje",
          "job": "Boardcomputer",
          "email": "phillip.hatje@egnition-hamburg.de",
          "image": "assets/images/team/2024/phillip-hatje.jpg"
        },
        {
          "name": "Sediq Abdullah",
          "job": "Sensorboard",
          "email": "sediq.abdullah@egnition-hamburg.de",
          "image": "assets/images/team/2024/sediq-abdullah.jpg"
        },
        {
          "name": "Thomas Friese",
          "job": "rGSS",
          "email": "thomas.friese@egnition-hamburg.de",
          "image": "assets/images/team/2024/thomas-friese.jpg"
        }
      ]
    },
    {
      "name": "Chassis",
      "members": [
        {
          "name": "Marvin Drabent",
          "job": "Head of Chassis",
          "email": "marvin.drabent@egnition-hamburg.de",
          "image": "assets/images/team/2024/marvin-drabent.jpg"
        },
        {
          "name": "Dilek Yildiz",
          "job": "SES-Support",
          "email": "dilek.yildiz@egnition-hamburg.de",
          "image": "assets/images/team/2024/dilek-yildiz.jpg"
        },
        {
          "name": "Finn Breuer",
          "job": "SES",
          "email": "finn.breuer@egnition-hamburg.de",
          "image": "assets/images/team/2024/finn-breuer.jpg"
        },
        {
          "name": "Fujia Li",
          "job": "Monocoque Construction",
          "email": "fujia.li@egnition-hamburg.de",
          "image": "assets/images/team/2024/placeholder.jpg"
        },
        {
          "name": "Kumar-Swamy Hosahalli S.",
          "job": "Rollhoops",
          "email": "kumar-swamy.hosahalli-sadashivaiah@egnition-hamburg.de",
          "image": "assets/images/team/2024/kumar-swamy-hosahalli-s.jpg"
        },
        {
          "name": "Tehsinraza Mulla",
          "job": "Electronic Boxes",
          "email": "tehsinraza.mulla@egnition-hamburg.de",
          "image": "assets/images/team/2024/placeholder.jpg"
        },
        {
          "name": "Till Heyer",
          "job": "Steering Wheel",
          "email": "till.heyer@egnition-hamburg.de",
          "image": "assets/images/team/2024/till-heyer.jpg"
        },
        {
          "name": "Tim Neumann",
          "job": "Monocoque Simulation",
          "email": "tim.neumann@egnition-hamburg.de",
          "image": "assets/images/team/2024/tim-neumann.jpg"
        },
        {
          "name": "Yasin Afshari",
          "job": "Electronic Boxes",
          "email": "yasin.afshari@egnition-hamburg.de",
          "image": "assets/images/team/2024/placeholder.jpg"
        },
        {
          "name": "Yuvan Nethaji Thiagarajan",
          "job": "Ergonomics",
          "email": "yasin.afshari@egnition-hamburg.de",
          "image": "assets/images/team/2024/yuvan-nethaji-thiagarjan.jpg"
        }
      ]
    },
    {
      "name": "Driverless",
      "members": [
        {
          "name": "Ferdinand Grenzing",
          "job": "Head of Driverless Software",
          "email": "ferdinand.grenzing@egnition-hamburg.de",
          "image": "assets/images/team/2024/ferdinand-grenzing.jpg"
        },
        {
          "name": "Christian Salamut",
          "job": "Simulation",
          "email": "christian.salamut@egnition-hamburg.de",
          "image": "assets/images/team/2024/christian-salamut.jpg"
        },
        {
          "name": "Daniil Gourvitch",
          "job": "Vehicle Model",
          "email": "daniil.gourvitch@egnition-hamburg.de",
          "image": "assets/images/team/2024/daniil-gourvitch.jpg"
        },
        {
          "name": "Halina Nguyen",
          "job": "Data analysis",
          "email": "halina.nguyen@egnition-hamburg.de",
          "image": "assets/images/team/2024/halina-nguyen.jpg"
        },
        {
          "name": "Henry Paegel",
          "job": "Pathplanning",
          "email": "henry.paegel@egnition-hamburg.de",
          "image": "assets/images/team/2024/henry-paegel.jpg"
        },
        {
          "name": "Jeremiasz Skorupski",
          "job": "Perception",
          "email": "jeremiasz.skorupski@egnition-hamburg.de",
          "image": "assets/images/team/2024/jeremiasz-skorupski.jpg"
        },
        {
          "name": "Luis Binne",
          "job": "Data analysis",
          "email": "luis.binne@egnition-hamburg.de",
          "image": "assets/images/team/2024/luis-binne.jpg"
        },
        {
          "name": "Manav Thakkar",
          "job": "Controller",
          "email": "manav.thakkar@egnition-hamburg.de",
          "image": "assets/images/team/2024/manav-thakkar.jpg"
        },
        {
          "name": "Sabrina Schumacher",
          "job": "Pathplanning",
          "email": "sabrina.schumacher@egntion-hamburg.de",
          "image": "assets/images/team/2024/sabrina-schuhmacher.jpg"
        },
         {
          "name": "Sanjayyadav Tamilselvam",
          "job": "State Estimation",
          "email": "sanjayyadav.tamilselvam@egntion-hamburg.de",
          "image": "assets/images/team/2024/sanjayyadav-tamilselvam.jpg"
        },
         {
          "name": "Ulas Kamis",
          "job": "Support",
          "email": "ulas.kamis@egntion-hamburg.de",
          "image": "assets/images/team/2024/ulas-kamis.jpg"
        },
         {
          "name": "Valentin Beller",
          "job": "Data Analysis",
          "email": "valentin.beller@egntion-hamburg.de",
          "image": "assets/images/team/2024/valentin-beller.jpg"
        }
      ]
    },
    {
      "name": "Drivers",
      "members": [
        {
          "name": "Johannes Schröder",
          "job": "",
          "email": "johannes.schroeder@egnition-hamburg.de",
          "image": "assets/images/team/2024/johannes-schroeder.jpg"
        },
        {
          "name": "Erik Fischer",
          "job": "",
          "email": "erik.fischer@egnition-hamburg.de",
          "image": "assets/images/team/2024/erik-fischer.jpg"
        },
        {
          "name": "Lex Hoffmann",
          "job": "",
          "email": "lex.hoffmann@egnition-hamburg.de",
          "image": "assets/images/team/2024/lex-hoffmann.jpg"
        },
        {
          "name": "Henri Hoop",
          "job": "",
          "email": "henri.hoop@egnition-hamburg.de",
          "image": "assets/images/team/2024/henri-hoop.jpg"
        },
        {
          "name": "Timon Suhk",
          "job": "",
          "email": "timon.suhk@egnition-hamburg.de",
          "image": "assets/images/team/2024/timon-suhk.jpg"
        },
        {
          "name": "Torben Lehmann",
          "job": "",
          "email": "torben.lehmann@egnition-hamburg.de",
          "image": "assets/images/team/2024/torben-lehmann.jpg"
        }
      ]
    },
    {
      "name": "Statics",
      "members": [
        {
          "name": "Wilhelm Pantaleon Lorenty",
          "job": "Head of Statics",
          "email": "wilhelm-pantaleon. lorenty@egnition-hamburg.de",
          "image": "assets/images/team/2024/wilhelm-pantaleon-lorenty.jpg"
        },
        {
          "name": "Laurent Etzkorn",
          "job": "BPP",
          "email": "laurent.etzkorn@egnition-hamburg.de",
          "image": "assets/images/team/2024/laurent-etzkorn.jpg"
        },
        {
          "name": "Merisa Muric",
          "job": "BPP",
          "email": "merisa.muric@egnition-hamburg.de",
          "image": "assets/images/team/2024/merisa-muric.jpg"
        }
      ]
    }
  ],
  "egn23": [
    {
      "name": "Core Team",
      "members": [
        {
          "name": "Thorben Ehlers",
          "job": "Team Captain",
          "email": "thorben.ehlers@egnition-hamburg.de",
          "image": "assets/images/team/2023/thorben-ehlers.jpg",
        },
        {
          "name": "Beyza Günsür",
          "job": "Head of Marketing",
          "email": "beyza.guensuer@egnition-hamburg.de",
          "image": "assets/images/team/2023/beyza-günsür.jpg",
        },
        {
          "name": "Leonard Schauer",
          "job": "Technical Lead (Electronics)",
          "email": "leonard.schauer@egnition-hamburg.de",
          "image": "assets/images/team/2023/leonard-schauer.jpg",
        },
        {
          "name": "Maximilian Scholz",
          "job": "Head of Finance",
          "email": "maximilian.scholz@egnition-hamburg.de",
          "image": "assets/images/team/2023/maximilian-scholz.jpg",
        },
        {
          "name": "Moritz Schweyda",
          "job": "Head of Bodywork",
          "email": "moritz.schweyda@egnition-hamburg.de",
          "image": "assets/images/team/2023/moritz-schweyda.jpg",
        },
        {
          "name": "Patrizia Kohnen",
          "job": "Head of Electronics",
          "email": "patrizia.kohnen@egnition-hamburg.de",
          "image": "assets/images/team/2023/patrizia-kohnen.jpg",
        },
        {
          "name": "Phillip Hatje",
          "job": "Head of Embedded Systems",
          "email": "phillip.hatje@egnition-hamburg.de",
          "image": "assets/images/team/2023/phillip-hatje.jpg",
        },
        {
          "name": "Sascha Behrendt",
          "job": "Technical Lead (Mechanics)",
          "email": "sascha.behrendt@egnition-hamburg.de",
          "image": "assets/images/team/2023/sascha-behrendt.jpg",
        },
        {
          "name": "Tom Hoffmann",
          "job": "Head of Performance",
          "email": "tom.hoffmann@egnition-hamburg.de",
          "image": "assets/images/team/2023/tom-hoffmann.jpg",
        },
        {
          "name": "Vincent Jünemann",
          "job": "Head of Driverless Software",
          "email": "vincent.jünemann@egnition-hamburg.de",
          "image": "assets/images/team/2023/vincent-jünemann.jpg",
        }
      ]
    },
    {
      "name": "Finance",
      "members": [
        { "name": "Maximilian Scholz", "job": "Head of Finance", "email": "maximilian.scholz@egnition-hamburg.de", "image": "assets/images/team/2023/maximilian-scholz.jpg" }
      ]
    },
    {
      "name": "Marketing",
      "members": [
        { "name": "Beyza Günsür", "job": "Head of Marketing", "email": "beyza.guensuer@egnition-hamburg.de", "image": "assets/images/team/2023/beyza-günsür.jpg"},
        { "name": "Christina Büttner", "job": "PR & Eventmanagement", "email": "christina.buettner@egnition-hamburg.de", "image": "assets/images/team/2023/christina-büttner.jpg" },
        { "name": "Jan Lachmann", "job": "Photography", "email": "jan.lachmann@egnition-hamburg.de", "image": "assets/images/team/2023/jan-lachmann.jpg" },
        { "name": "Justus Menzel", "job": "PR & Sponsoring", "email": "justus.menzel@egnition-hamburg.de", "image": "assets/images/team/2023/justus-menzel.jpg" },
        { "name": "Laurent Etzkorn", "job": "Support", "email": "laurent.etzkorn@egnition-hamburg.de", "image": "assets/images/team/2023/laurent-etzkorn.jpg" },
        { "name": "Maikel Groh", "job": "PR & Sponsoring", "email": "maikel.groh@egnition-hamburg.de", "image": "assets/images/team/2023/maikel-groh.jpg" },
        { "name": "Solène Mayerhofer", "job": "Social Media", "email": "solene.mayerhofer@egnition-hamburg.de", "image": "assets/images/team/2023/solene-mayerhofer.jpg" },
        { "name": "Timon Suhk", "job": "Photography", "email": "timon.suhk@egnition-hamburg.de", "image": "assets/images/team/2023/timon-suhk.jpg" },
        { "name": "Tjark Sievers", "job": "Head of Videography", "email": "tjark.sievers@egnition-hamburg.de", "image": "assets/images/team/2023/tjark-sievers.jpg" },
        { "name": "Torben Salihi", "job": "Graphic Design / Website", "email": "torben.salihi@egnition-hamburg.de", "image": "assets/images/team/2023/torben-salihi.jpg" }
      ]
    },
    {
      "name": "Bodywork",
      "members": [
        { "name": "Moritz Schweyda", "job": "Head of Bodywork", "email": "moritz.schweyda@egnition-hamburg.de", "image": "assets/images/team/2023/moritz-schweyda.jpg" },
        { "name": "Antonio Borchert", "job": "Rearwing", "email": "antonio.borchert@egnition-hamburg.de", "image": "assets/images/team/2023/antonio-borchert.jpg" },
        { "name": "Dilek Yildiz", "job": "Monocoque Simulation", "email": "dilek.yildiz@egnition-hamburg.de", "image": "assets/images/team/2023/dilek-yildiz.jpg" },
        { "name": "Erik Fischer", "job": "Covers", "email": "erik.fischer@egnition-hamburg.de", "image": "assets/images/team/2023/erik-fischer.jpg" },
        { "name": "Finn Breuer", "job": "Support", "email": "finn.breuer@egnition-hamburg.de", "image": "assets/images/team/2023/finn-breuer.jpg" },
        { "name": "Henri Hoop", "job": "Support", "email": "henri.hoop@egnition-hamburg.de", "image": "assets/images/team/2023/henri-hoop.jpg" },
        { "name": "Henrik Berkmann", "job": "Cooling COnstruction & Simulation", "email": "henrik.berkmann@egnition-hamburg.de", "image": "assets/images/team/2023/henrik-bergmann.jpg" },
        { "name": "Marvin Drabent", "job": "Monocoque Construction", "email": "marvin.drabent@egnition-hamburg.de", "image": "assets/images/team/2023/marvin-drabent.jpg" },
        { "name": "Menno Berger", "job": "Frontwing & Rearwing", "email": "menno.berger@egnition-hamburg.de", "image": "assets/images/team/2023/menno-berger.jpg" },
        { "name": "Rana Sharkawy", "job": "Accumulator Container & Electronic Boxes", "email": "rana.sharkawy@egnition-hamburg.de", "image": "assets/images/team/2023/rana-sharkawy.jpg" },
        { "name": "Till Metzger", "job": "Wing Mechanics", "email": "till.metzger@egnition-hamburg.de", "image": "assets/images/team/2023/till-metzger.jpg" },
        { "name": "Tim Neumann", "job": "Structural Optimization", "email": "tim.neumann@egnition-hamburg.de", "image": "assets/images/team/2023/tim-neumann.jpg" },
        { "name": "Wilhelm Pantaleon Lorenty", "job": "Steering Wheel", "email": "wilhelm-pantaleon.lorenty@egnition-hamburg.de", "image": "assets/images/team/2023/wilhelm-lorenty.jpg" },
        { "name": "Yu-Tung Yang", "job": "Rollhoops", "email": "yu-tung.yang@egnition-hamburg.de", "image": "assets/images/team/2023/yu-tung-yang.jpg" }
      ]
        },
        {
          "name": "Electronics",
          "members": [
            { "name": "Patrizia Kohnen", "job": "Head of Electronics", "email": "patrizia.kohnen@egnition-hamburg.de", "image": "assets/images/team/2023/patrizia-kohnen.jpg" },
            { "name": "Christian Sühl", "job": "AS PCB", "email": "christian.suehl@egnition-hamburg.de", "image": "assets/images/team/2023/christian-sühl.jpg" },
            { "name": "Dominik Hanke", "job": "ACU PCB", "email": "dominik.hanke@egnition-hamburg.de", "image": "assets/images/team/2023/dominik-hanke.jpg" },
            { "name": "Jaffar Ibrahim", "job": "Dashboard & Display PCB", "email": "jaffar.ibrahim@egnition-hamburg.de", "image": "assets/images/team/2023/jaffar-ibrahim.jpg" },
            { "name": "Jan Lachmann", "job": "HV Components", "email": "jan.lachmann@egnition-hamburg.de", "image": "assets/images/team/2023/jan-lachmann.jpg" },
            { "name": "Janik Bach", "job": "Fuse Board", "email": "janik.bach@egnition-hamburg.e", "image": "assets/images/team/2023/janik-bach.jpg" },
            { "name": "Jannik Johannsen", "job": "Motor Controller", "email": "jannik.johannsen@egnition-hamburg.de", "image": "assets/images/team/2023/jannik-johannsen.jpg" },
            { "name": "Manel Ben Abdelafou", "job": "TSAL PCB", "email": "manel.ben.abdelafou@egnition-hamburg.de", "image": "assets/images/team/2023/manel-abdelafou.jpg" },
            { "name": "Nitin Nandhish", "job": "BSPD PCB", "email": "nitin.nandhish@egnition-hamburg.de", "image": "assets/images/team/2023/nitin-nandhish.jpg" },
            { "name": "Sediq Abdullah", "job": "Sensor PCB", "email": "sediq.abdullah@egnition-hamburg.de", "image": "assets/images/team/2023/sediq-abdullah.jpg" },
            { "name": "Timon Suhk", "job": "Accumulator & BMS", "email": "timon.suhk@egnition-hamburg.de", "image": "assets/images/team/2023/timon-suhk.jpg" },
            { "name": "Tim Schubert", "job": "Wiring Harness", "email": "tim.schubert@egnition-hamburg.de", "image": "assets/images/team/2023/tim-schubert.jpg" }
          ]
        },
        {
          "name": "Embedded Systems",
          "members": [
            { "name": "Phillip Hatje", "job": "Head of Embedded Systems", "email": "phillip.hatje@egnition-hamburg.de", "image": "assets/images/team/2023/phillip-hatje.jpg" },
            { "name": "Akhil Sharma", "job": "Support", "email": "akhil.sharma@egnition-hamburg.de", "image": "assets/images/team/2023/placeholder.png" },
            { "name": "Andrei Draghici", "job": "Driver Communication", "email": "andrei.draghici@egnition-hamburg.de", "image": "assets/images/team/2023/andrei-draghici.jpg" },
            { "name": "Christian Sühl", "job": "AS PCB", "email": "christian.suehl@egnition-hamburg.de", "image": "assets/images/team/2023/christian-sühl.jpg" },
            { "name": "Constantin Duske", "job": "ACU Software", "email": "constantin.duske@egnition-hamburg.de", "image": "assets/images/team/2023/constantin-duske.jpg" },
            { "name": "Paul Erb", "job": "Sensor PCB Software", "email": "paul.erb@egnition-hamburg.de", "image": "assets/images/team/2023/paul-erb.jpg" },
            { "name": "Torben Lehmann", "job": "Fuseboard & Test Sensor PCB Software", "email": "torben.lehmann@egnition-hamburg.de", "image": "assets/images/team/2023/torben-lehmann.jpg" },
          ]
        },
        {
          "name": "Performance",
          "members": [
            { "name": "Tom Hoffmann", "job": "Head of Performance", "email": "tom.hoffmann@egnition-hamburg.de", "image": "assets/images/team/2023/tom-hoffmann.jpg" },
            { "name": "Biram-Abdoulie Jeng", "job": "Support", "email": "biram-abdoulie.jeng@egnition-hamburg.de", "image": "assets/images/team/2023/biram-jeng.jpg" },
            { "name": "David Rasuli", "job": "Kinematics", "email": "david.rasuli@egnition-hamburg.de", "image": "assets/images/team/2023/david-rasuli.jpg" },
            { "name": "Emil Stahl", "job": "EBS", "email": "emil.stahl@egnition-hamburg.de", "image": "assets/images/team/2023/emil-stahl.jpg" },
            { "name": "Felix Stahl", "job": "Wheel Hub & SDS", "email": "felix.hoffmann@egnition-hamburg.de", "image": "assets/images/team/2023/felix-hoffmann.jpg" },
            { "name": "Jasper Schacht", "job": "Brakes & Suspension", "email": "jasper.schacht@egnition-hamburg.de", "image": "assets/images/team/2023/jasper-schacht.jpg" },
            { "name": "Kapil Maharjan", "job": "Pedals", "email": "kapil.maharjan@egnition-hamburg.de", "image": "assets/images/team/2023/kapil-maharjan.jpg" },
            { "name": "Malte Wiechern", "job": "Motor & Gearbox", "email": "malte.wiechern@egnition-hamburg.de", "image": "assets/images/team/2023/malte-wiechern.jpg" },
            { "name": "Marco Stangenberg", "job": "Spring-Damper System", "email": "marco.stangenberg@egnition-hamburg.de", "image": "assets/images/team/2023/marco-stangenberg.jpg" },
            { "name": "Miles Wasner", "job": "Steering & Driverless Steering", "email": "miles.wasner@egnition-hamburg.de", "image": "assets/images/team/2023/miles-wasner.jpg" }
          ]
        },
        {
          "name": "Driverless Software",
          "members": [
            { "name": "Vincent Jünemann", "job": "Head of Driverless Software", "email": "vincent.jünemann@egnition-hamburg.de", "image": "assets/images/team/2023/vincent-jünemann.jpg" },
            { "name": "Ferdinand Grenzing", "job": "Pathplanning", "email": "ferdinand.grenzing@egnition-hamburg.de", "image": "assets/images/team/2023/ferdinand-grenzing.jpg" },
            { "name": "Henry Paegel", "job": "Pathplanning", "email": "henry.paegel@egnition-hamburg.de", "image": "assets/images/team/2023/henry-paegel.jpg" },
            { "name": "Luc Rehm", "job": "Inverter Tuning", "email": "luc.rehm@egnition-hamburg.de", "image": "assets/images/team/2023/luc-rehm.jpg" },
            { "name": "Luis Binne", "job": "Cone Recognition", "email": "luis.binne@egnition-hamburg.de", "image": "assets/images/team/2023/luis-binne.jpg" },
            { "name": "Moustafa Ahmad", "job": "LiDAR Calibration", "email": "moustafa.ahmad@egnition-hamburg.de", "image": "assets/images/team/2023/moustafa-ahmad.jpg" },
            { "name": "Oliver Backof", "job": "State Estimation", "email": "oliver.backof@egnition-hamburg.de", "image": "assets/images/team/2023/oliver-backof.jpg" },
            { "name": "Tom Sureck", "job": "Simulation & Unit Tests", "email": "tom.sureck@egnition-hamburg.de", "image": "assets/images/team/2023/tom-sureck.jpg" },
          ]
        },
        {
          "name": "Statics",
          "members": [
            { "name": "Maikel Groh", "job": "Business Plan Presentation", "email": "maikel.groh@egnition-hamburg.de", "image": "assets/images/team/2023/maikel-groh.jpg" },
            { "name": "Solène Mayerhofer", "job": "Business Plan Presentation", "email": "solene.mayerhofer@egnition-hamburg.de", "image": "assets/images/team/2023/solene-mayerhofer.jpg" },
            { "name": "Christina Büttner", "job": "Business Plan Presentation", "email": "christina.buettner@egnition-hamburg.de", "image": "assets/images/team/2023/christina-büttner.jpg" },
          ]
        }

  ],
    "egn22": [
    {
      "name": "Core Team",
      "members": [
        {
          "name": "Can Ersöz",
          "job": "Team Captain",
          "email": "can.ersoez@egnition-hamburg.de",
          "image": "assets/images/team/2022/can-ersöz.jpg",
        },
        {
          "name": "Maxim Wille",
          "job": "Head of Finances",
          "email": "maxim.wille@egnition-hamburg.de",
          "image": "assets/images/team/2022/maxim-wille.jpg",
        },
        {
          "name": "Maikel Groh",
          "job": "Head of Marketing",
          "email": "maikel.groh@egnition-hamburg.de",
          "image": "assets/images/team/2022/maikel-groh.jpg",
        },
        {
          "name": "Henrik Berkmann",
          "job": "Technical Director & Head of Aerodynamics",
          "email": "henrik.berkmann@egnition-hamburg.de",
          "image": "assets/images/team/2022/henrik-berkmann.jpg",
        },
        {
          "name": "Nils Bade",
          "job": "Technical Director",
          "email": "nils.bade@egnition-hamburg.de",
          "image": "assets/images/team/2022/nils-bade.jpg",
        },
        {
          "name": "Nils Reimer",
          "job": "Head of Electronics",
          "email": "nils.reimer@egnition-hamburg.de",
          "image": "assets/images/team/2022/nils-reimer.jpg",
        },
        {
          "name": "Janis Wöltje",
          "job": "Head of Performance",
          "email": "janis.woeltje@egnition-hamburg.de",
          "image": "assets/images/team/2022/janis-wöltje.jpg",
        },
        {
          "name": "Emil Stahl",
          "job": "Head of Performance",
          "email": "emil.stahl@egnition-hamburg.de",
          "image": "assets/images/team/2022/emil-stahl.jpg",
        },
        {
          "name": "Lasse Lüder",
          "job": "Head of Software",
          "email": "lasse.lueder@egnition-hamburg.de",
          "image": "assets/images/team/2022/lasse-lüder.jpg",
        },
        {
          "name": "Constantin Duske",
          "job": "Head of Embedded Systems",
          "email": "constantin.duske@egnition-hamburg.de",
          "image": "assets/images/team/2022/constantin-duske.jpg",
        },
        {
          "name": "Leon Nolting",
          "job": "Head of Chassis",
          "email": "leon.nolting@egnition-hamburg.de",
          "image": "assets/images/team/2022/leon-nolting.jpg",
        }
      ]
    },
    {
      "name": "Finance",
      "members": [
        { "name": "Maxim Wille", "job": "Head of Finance", "email": "maxim.wille@egnition-hamburg.de", "image": "assets/images/team/2022/maxim-wille.jpg" }
      ]
    },
    {
      "name": "Marketing",
      "members": [
        { "name": "Maikel Groh", "job": "Head of Marketing", "email": "maikel.groh@egnition-hamburg.de", "image": "assets/images/team/2022/maikel-groh.jpg"},
        { "name": "Tjark Sievers", "job": "Social Media & Photography", "email": "tjark.sievers@egnition-hamburg.de", "image": "assets/images/team/2022/tjark-sievers.jpg" },
        { "name": "Timon Suhk", "job": "Photography", "email": "timon.suhk@egnition-hamburg.de", "image": "assets/images/team/2022/timon-suhk.jpg" },
        { "name": "Kevin Hofmann", "job": "Website", "email": "kevin.hofmann@egnition-hamburg.de", "image": "assets/images/team/2022/kevin-hofmann.jpg" },
        { "name": "Justus Menzel", "job": "PR & Sponsoring", "email": "justus.menzel@egnition-hamburg.de", "image": "assets/images/team/2022/justus-menzel.jpg" },
        { "name": "Rana Sharkawy", "job": "Support", "email": "rana.sharkawy@egnition-hamburg.de", "image": "assets/images/team/2022/rana-sharkawy.jpg" },
        { "name": "Athena Dominic", "job": "Support", "email": "athena.dominic@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" }
        ]
    },
    {
      "name": "Aerodynamics",
      "members": [
        { "name": "Henrik Berkmann", "job": "Technical Director & Head of Aerodynamics", "email": "henrik.berkmann@egnition-hamburg.de", "image": "assets/images/team/2022/henrik-berkmann.jpg" },
        { "name": "Sascha Behrendt", "job": "Mechanical Construction", "email": "sascha.behrendt@egnition-hamburg.de", "image": "assets/images/team/2022/sascha-behrendt.jpg" },
        { "name": "Moritz Schweyda", "job": "Mechanical Construction", "email": "moritz.schweyda@egnition-hamburg.de", "image": "assets/images/team/2022/moritz-schweyda.jpg" },
        { "name": "Jan Heiker", "job": "Frontwing", "email": "jan.heiker@egnition-hamburg.de", "image": "assets/images/team/2022/jan-heiker.jpg" },
        { "name": "Beyza Günsür", "job": "Rearwing", "email": "beyza.guensuer@egnition-hamburg.de", "image": "assets/images/team/2022/beyza-günsür.jpg" },
        { "name": "Lew Jankilevich", "job": "Cooling Construction", "email": "lew.jankilevich@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
        { "name": "Henrik Schmitz", "job": "Cooling Simulation", "email": "henrik.schmitz@egnition-hamburg.de", "image": "assets/images/team/2022/henrik-schmitz.jpg" },
        { "name": "Macleen Silva", "job": "Covers", "email": "macleen.silva@egnition-hamburg.de", "image": "assets/images/team/2022/macleen-silva.jpg" },
        { "name": "Zamreen Ramzeen", "job": "Support", "email": "zamreen.zamreen@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
        { "name": "Taibah Jaffery", "job": "Suport", "email": "taibah.jaffery@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
        { "name": "Jivendiren Udaiyan", "job": "Support", "email": "jivendiren.udaiyan@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" }
       ]
        },
        {
          "name": "Electronics",
          "members": [
            { "name": "Nils Reimer", "job": "Head of Electronics", "email": "nils.reimer@egnition-hamburg.de", "image": "assets/images/team/2022/nils-reimer.jpg" },
            { "name": "Leonard Schauer", "job": "TSAL PCB", "email": "leonard.schauer@egnition-hamburg.de", "image": "assets/images/team/2022/leonard-schauer.jpg" },
            { "name": "Felix Scheikowski", "job": "Board Computer", "email": "felix.scheikowski@egnition-hamburg.de", "image": "assets/images/team/2022/felix-scheikowski.jpg" },
            { "name": "Maximilian Scholz", "job": "Dashboard & Display PCB", "email": "maximilian.scholz@egnition-hamburg.de", "image": "assets/images/team/2022/maximilian-scholz.jpg" },
            { "name": "Steffen Rein", "job": "EBS PCB", "email": "steffen.rein@egnition-hamburg.de", "image": "assets/images/team/2022/steffen-rein.jpg" },
            { "name": "Thorbjörn Albrecht", "job": "Wiring Harness", "email": "thorbjoern.albrecht@egnition-hamburg.e", "image": "assets/images/team/2022/thorbjörn-albrecht.jpg" },
            { "name": "Christian Sühl", "job": "Fuse Board", "email": "christian.suehl@egnition-hamburg.de", "image": "assets/images/team/2022/christian-sühl.jpg" },
            { "name": "Manel Ben Abdelafou", "job": "Sensor PCB", "email": "manel.ben.abdelafou@egnition-hamburg.de", "image": "assets/images/team/2022/manel-ben-abdelafou.jpg" },
            { "name": "Deyan Naydenov", "job": "LV Precharge PCB", "email": "nitin.nandhish@egnition-hamburg.de", "image": "assets/images/team/2022/deyan-naydenov.jpg" },
            { "name": "Sediq Abdullah", "job": "LED PCB", "email": "deyan.naydenov@egnition-hamburg.de", "image": "assets/images/team/2022/sediq-abdullah.jpg" },
            { "name": "Timon Suhk", "job": "ACU PCB", "email": "timon.suhk@egnition-hamburg.de", "image": "assets/images/team/2022/timon-suhk.jpg" },
            { "name": "Tim Schubert", "job": "Support", "email": "tim.schubert@egnition-hamburg.de", "image": "assets/images/team/2022/tim-schubert.jpg" },
            { "name": "Ben Bahe", "job": "BSPD PCB", "email": "ben.bahe@egnition-hamburg.de", "image": "assets/images/team/2022/ben-bahe.jpg" },
            { "name": "Lasse Lüder", "job": "HV Ccomponents", "email": "lasse.lueder@egnition-hamburg.de", "image": "assets/images/team/2022/lasse-lüder.jpg" },
            { "name": "Patrizia Kohnen", "job": "Support", "email": "patrizia.kohnen@egnition-hamburg.de", "image": "assets/images/team/2022/patrizia-kohnen.jpg" },
            { "name": "Jannik Johannsen", "job": "Support", "email": "jannik.johannsen@egnition-hamburg.de", "image": "assets/images/team/2022/jannik-johannsen.jpg" },

          ]
        },
        {
          "name": "Performance",
          "members": [
            { "name": "Janis Wöltje", "job": "Head of Performance", "email": "janis.woeltje@egnition-hamburg.de", "image": "assets/images/team/2022/janis-wöltje.jpg" },
            { "name": "Emil Stahl", "job": "Head of Performance", "email": "emil.stahl@egnition-hamburg.de", "image": "assets/images/team/2022/emil-stahl.jpg" },
            { "name": "Alexander Wulsten", "job": "Head of Machining", "email": "alexander.wulsten@egnition-hamburg.de", "image": "assets/images/team/2022/alexander-wulsten.jpg" },
            { "name": "Jasper Schacht", "job": "Wheel Suspension", "email": "jasper.schacht@egnition-hamburg.de", "image": "assets/images/team/2022/jasper-schacht.jpg" },
            { "name": "Sören Bähr", "job": "Wheel Carrier", "email": "soeren.baehr@egnition-hamburg.de", "image": "assets/images/team/2022/sören-bähr.jpg" },
            { "name": "Adrian Thern", "job": "Brakes", "email": "adrian.thern@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
            { "name": "Giulio Corallo", "job": "Brakes & EBS", "email": "giulio.corallo@egnition-hamburg.de", "image": "assets/images/team/2022/giulio-corallo.jpg" },
            { "name": "Andreas Jessen", "job": "Kinematics", "email": "andreas.jessen@egnition-hamburg.de", "image": "assets/images/team/2022/andreas-jessen.jpg" },
            { "name": "Miles Wasner", "job": "Steering", "email": "miles.wasner@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
            { "name": "Tom Hoffmann", "job": "Spring-Damper System", "email": "tom.hoffmann@egnition-hamburg.de", "image": "assets/images/team/2022/tom-hoffmann.jpg" },
            { "name": "Gurukiran Ravi", "job": "Laptime", "email": "gurukiran.ravi@egnition-hamburg.de", "image": "assets/images/team/2022/gurukiran-ravi.jpg" },
            { "name": "Malte Rietdorf", "job": "Motor", "email": "malte.rietdorf@egnition-hamburg.de", "image": "assets/images/team/2022/malte-rietdorf.jpg" },
            { "name": "Vasanth Manjappa", "job": "Wheelhub", "email": "vasanth.manjappa@egnition-hamburg.de", "image": "assets/images/team/2022/vasanth-manjappa.jpg" },
            { "name": "Thorben Ehlers", "job": "Driverless Steering", "email": "thorben.ehlers@egnition-hamburg.de", "image": "assets/images/team/2022/thorben-ehlers.jpg" },
            { "name": "Astiaj Fard", "job": "Pedals", "email": "astiaj.fard@egnition-hamburg.de", "image": "assets/images/team/2022/astiaj-fard.jpg" },
            { "name": "Maximilian Radtke", "job": "Support", "email": "maximilian.radtke@egnition-hamburg.de", "image": "assets/images/team/2022/maximilian-radtke.jpg" },
            { "name": "Biram-Abdoulie Jeng", "job": "Support", "email": "biram-abdoulie.jeng@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
            { "name": "Abdulaziz Hamami", "job": "Support", "email": "abdulaziz.hamami@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
            { "name": "Moritz Brandl", "job": "Support", "email": "moritz.brandl@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" }
          ]
        },
        {
          "name": "Software",
          "members": [
            { "name": "Lasse Lüder", "job": "Head of Software", "email": "lasse.lueder@egnition-hamburg.de", "image": "assets/images/team/2022/lasse-lüder.jpg" },
            { "name": "Constantin Duske", "job": "Head of Embedded Systems", "email": "constantin.duske@egnition-hamburg.de", "image": "assets/images/team/2022/constantin-duske.jpg" },
            { "name": "Andrei Draghici", "job": "Embedded Systems", "email": "andrei.draghici@egnition-hamburg.de", "image": "assets/images/team/2022/andrei-draghici.jpg" },
            { "name": "Phillip Hatje", "job": "Embedded Systems", "email": "phillip.hatje@egnition-hamburg.de", "image": "assets/images/team/2022/phillip-hatje.jpg" },
            { "name": "Volker Neff", "job": "Board Computer", "email": "volker.neff@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
            { "name": "Marius Ramcke", "job": "Controls", "email": "marius.ramcke@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
            { "name": "Finn Meyer", "job": "State Estimation", "email": "finn.meyer@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
            { "name": "Tom Sureck", "job": "Testing & Simulation", "email": "vincent.juenemann@egnition-hamburg.de", "image": "assets/images/team/2022/tom-sureck.jpg" },
            { "name": "Vincent Jünemann", "job": "Track Recognition", "email": "marco.stangenberg@egnition-hamburg.de", "image": "assets/images/team/2022/vincent-jünemann.jpg" },
            { "name": "Luc Rehm", "job": "SLAM", "email": "luc.rehm@egnition-hamburg.de", "image": "assets/images/team/2022/luc-rehm.jpg" },
            { "name": "René Hochdahl", "job": "MPC", "email": "rene.hochdahl@egnition-hamburg.de", "image": "assets/images/team/2022/rené-hochdahl.jpg" },
            { "name": "Moustafa Ahmad", "job": "LiDAR", "email": "moustafa.ahmad@egnition-hamburg.de", "image": "assets/images/team/2022/moustafa-ahmad.jpg" },
            { "name": "Paul Erb", "job": "Embedded Systems", "email": "paul.erb@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
            { "name": "Henry Paegel", "job": "Path Planning", "email": "henry.paegel@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
            { "name": "Matin Jafari", "job": "State Estimation", "email": "matin.jafari@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
            { "name": "Torben Lehmann", "job": "Light Barrier", "email": "torben.lehmann@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
          ]
        },
        {
          "name": "Chassis",
          "members": [
            { "name": "Leon Nolting", "job": "Head of Chassis", "email": "leon.nolting@egnition-hamburg.de", "image": "assets/images/team/2022/leon-nolting.jpg" },
            { "name": "Johannes Ansorg", "job": "Monocoque", "email": "johannes.ansorg@egnition-hamburg.de", "image": "assets/images/team/2022/johannes-ansorg.jpg" },
            { "name": "Lina Scholz", "job": "Accumulator Container", "email": "lina.scholz@egnition-hamburg.de", "image": "assets/images/team/2022/lina-scholz.jpg" },
            { "name": "Jan Sarach", "job": "Ergonomics", "email": "jan.sarach@egnition-hamburg.de", "image": "assets/images/team/2022/jan-sarach.jpg" },
            { "name": "Bashar Sabbagh", "job": "Rollhoops", "email": "bashar.sabbagh@egnition-hamburg.de", "image": "assets/images/team/2022/bashar-sabbagh.jpg" },
            { "name": "Fujia Li", "job": "Electronic Boxes", "email": "fujia.li@egnition-hamburg.de", "image": "assets/images/team/2022/fujia-li.jpg" },
            { "name": "Jiamin Ji", "job": "FEM Simulation", "email": "jiamin.ji@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
            { "name": "Markus Schneider", "job": "SES", "email": "markus.schneider@egnition-hamburg.de", "image": "assets/images/team/2022/markus-schneider.jpg" },
            { "name": "Björn Dettmar", "job": "Steering Wheel", "email": "bjoern.dettmar@egnition-hamburg.de", "image": "assets/images/team/2022/björn-dettmar.jpg" },
            { "name": "Niklas Eilers", "job": "FEM Simulation", "email": "niklas.eilers@egnition-hamburg.de", "image": "assets/images/team/2022/niklas-eilers.jpg" },
            { "name": "Sabrina Schumacher", "job": "Manufacturing Support", "email": "sabrina.schumacher@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
            { "name": "Yu-Tung Yang", "job": "Support", "email": "yu-tung.yang@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
            { "name": "Dilek Yildiz", "job": "Support", "email": "dilek.yildiz@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },
          ]
        },
        {
          "name": "Statics",
          "members": [
            { "name": "Stephen Ong", "job": "Business Plan Presentation", "email": "stephen.ong@egnition-hamburg.de", "image": "assets/images/team/2022/stephen-ong.jpg" },
            { "name": "Marc Rosenwald", "job": "Business Plan Presentation", "email": "marc.rosenwald@egnition-hamburg.de", "image": "assets/images/team/2022/platzhalter.jpg" },          ]
        }

  ],
   "egn21": [
    {
      "name": "Core Team",
      "members": [
        {
          "name": "Nils Reimer",
          "job": "Team Captain",
          "email": "nils.reimer@egnition-hamburg.de",
          "image": "assets/images/team/2021/nils-reimer.jpg",
        },
        {
          "name": "Moritz Brandl",
          "job": "Technical Director",
          "email": "moritz.brandl@egnition-hamburg.de",
          "image": "assets/images/team/2021/moritz-brandl.jpg",
        },
        {
          "name": "Yannick Auth",
          "job": "Head of Statics & Finances",
          "email": "yannick.auth@egnition-hamburg.de",
          "image": "assets/images/team/2021/yannick-auth.jpg",
        },
        {
          "name": "Lasse Lüder",
          "job": "Head of Software",
          "email": "lasse.lueder@egnition-hamburg.de",
          "image": "assets/images/team/2021/lasse-lüder.jpg",
        },
        {
          "name": "Noah Ohlmann",
          "job": "Head of Marketing",
          "email": "noah.ohlmann@egnition-hamburg.de",
          "image": "assets/images/team/2019/noah-ohlmann.jpg",
        },
        {
          "name": "Lucas Rousselange",
          "job": "Head of Bodywork",
          "email": "lucas.rousselange@egnition-hamburg.de",
          "image": "assets/images/team/2020/lucas-rousselange.jpg",
        },
        {
          "name": "Thorbjörn Albrecht",
          "job": "Head of Electronics",
          "email": "thorbjoern.albrecht@egnition-hamburg.de",
          "image": "assets/images/team/2021/thorbjörn-albrecht.jpg",
        },
        {
          "name": "Emil Stahl",
          "job": "Head of Performance",
          "email": "emil.stahl@egnition-hamburg.de",
          "image": "assets/images/team/2021/emil-stahl.jpg",
        },
      ]
    },
    {
      "name": "Finance",
      "members": [
        { "name": "Yannick Auth", "job": "Head of Finance", "email": "yannick.auth@egnition-hamburg.de", "image": "assets/images/team/2021/yannick-auth.jpg" }
      ]
    },
    {
      "name": "Marketing",
      "members": [
        { "name": "Noah Ohlmann", "job": "Head of Marketing", "email": "noah.ohlmann@egnition-hamburg.de", "image": "assets/images/team/2019/noah-ohlmann.jpg"},
        { "name": "Finn Heydebreck", "job": "Webseite & Sponsoring", "email": "finn.heydebreck@egnition-hamburg.de", "image": "assets/images/team/2020/finn-heydebreck.jpg" },
        { "name": "Timon Suhk", "job": "Photography", "email": "timon.suhk@egnition-hamburg.de", "image": "assets/images/team/2020/timon-suhk.jpg" },
        { "name": "Leonard Möller", "job": "Sponsoring", "email": "leonard.moeller@egnition-hamburg.de", "image": "assets/images/team/2020/leonard-moeller.jpg" },
        { "name": "Maxim Wille", "job": "Social Media", "email": "maxim.wille@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
        { "name": "Maikel Groh", "job": "Support", "email": "maikel.groh@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
        ]
    },
    {
      "name": "Bodywork",
      "members": [
        { "name": "Lucas Rousselange", "job": "Head of Bodywork", "email": "lucas.rousselange@egnition-hamburg.de", "image": "assets/images/team/2020/lucas-rousselange.jpg" },
        { "name": "Johannes Ansorg", "job": "Monocoque Construction", "email": "johannes.ansorg@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
        { "name": "Leon Nolting", "job": "Monocoque Composites", "email": "leon.nolting@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
        { "name": "Jin Yiamin", "job": "Monocoque Simulation", "email": "jin.yiamin@egnition-hamburg.de", "image": "assets/images/team/2020/jiamin-yin.jpg" },
        { "name": "Hlib Leonov", "job": "Ergonomics", "email": "hlib.leonov@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
        { "name": "Jan Heiker", "job": "Frontwing", "email": "jan.heiker@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
        { "name": "Henrik Bergkmann", "job": "Undertray", "email": "henrik.berkmann@egnition-hamburg.de", "image": "assets/images/team/2021/henrik-berkmann.jpg" },
        { "name": "Hendrik Doß", "job": "CFD Methodics", "email": "hendrik.doss@egnition-hamburg.de", "image": "assets/images/team/2020/hendrik-doss.jpg" },
       ]
        },
        {
          "name": "Electronics",
          "members": [
            { "name": "Thorbjörn Albrecht", "job": "Head of Electronics", "email": "thorbjoern.albrecht@egnition-hamburg.de", "image": "assets/images/team/2021/thorbjörn-albrecht.jpg" },
            { "name": "Steffen Rein", "job": "Lightbarrier Sensor", "email": "steffen.rein@egnition-hamburg.de", "image": "assets/images/team/2021/steffen-rein.jpg" },
            { "name": "Manel Ben Abdelafou", "job": "Sensor PCB", "email": "manel.ben.abdelafou@egnition-hamburg.de", "image": "assets/images/team/2021/manel-ben-abdelafou.jpg" },
            { "name": "Sarah Klass", "job": "Accumulator Concepts", "email": "sarah.klass@egnition-hamburg.de", "image": "assets/images/team/2020/sarah-klass.jpg" },
            { "name": "Tim Suhk", "job": "Accumulator Control Unit", "email": "timon.suhk@egnition-hamburg.de", "image": "assets/images/team/2020/timon-suhk.jpg" },
            { "name": "Nils Bade", "job": "Fuseboard", "email": "nils.bade@egnition-hamburg.e", "image": "assets/images/team/2020/nils-bade.jpg" },
            { "name": "Felix Scheikowski", "job": "Bord- & DV Computer", "email": "felix.scheikowski@egnition-hamburg.de", "image": "assets/images/team/2020/felix-scheikowski.jpg" },
            { "name": "Hanne Binkau", "job": "Bordcomputer Support", "email": "hane.binkau@egnition-hamburg.de", "image": "assets/images/team/2020/hanne-binkau.jpg" },
            { "name": "Felix Wierlemann", "job": "Standardization", "email": "felix.wierlemann@egnition-hamburg.de", "image": "assets/images/team/2020/felix-wierlemann.jpg" },
          ]
        },
        {
          "name": "Performance",
          "members": [
            { "name": "Emil Stahl", "job": "Head of Performance", "email": "emil.stahl@egnition-hamburg.de", "image": "assets/images/team/2021/emil-stahl.jpg" },
            { "name": "Alexander Wulsten", "job": "Head of Machining", "email": "alexander.wulsten@egnition-hamburg.de", "image": "assets/images/team/2021/alexander-wulsten.jpg" },
            { "name": "Jan Philipp Weiland", "job": "Laptime Simulation", "email": "jan.weiland@egnition-hamburg.de", "image": "assets/images/team/2020/jan-philipp-weiland.jpg" },
            { "name": "Tom Hoffmann", "job": "Vehicle Dynamics & SDS", "email": "tom.hoffmann@egnition-hamburg.de", "image": "assets/images/team/2021/tom-hoffmann.jpg" },
            { "name": "Can Ersöz", "job": "Testing", "email": "can.ersoez@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Janis Wöltje", "job": "Gearbox", "email": "janis.woeltje@egnition-hamburg.de", "image": "assets/images/team/2021/janis-wöltje.jpg" },
            { "name": "Adrian Thern", "job": "Wheel Assembly", "email": "andreas.thern@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Thorben Ehlers", "job": "Driverless Steering", "email": "thorben.ehlers@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Sören Bähr", "job": "Compliance", "email": "soeren.baehr@egnition-hamburg.de", "image": "assets/images/team/2020/sören-bähr.jpg" },
            { "name": "Salih Düzgüner", "job": "Compliance", "email": "salih.duezguener@egnition-hamburg.de", "image": "assets/images/team/2020/salih-düzgüner.jpg" },
            { "name": "Carl Bildau", "job": "Cardan Joint", "email": "carl.bildau@egnition-hamburg.de", "image": "assets/images/team/2020/carl-bildau.jpg" },
            { "name": "Ole Ramming", "job": "Aerodynamics Suspension Rods", "email": "ole.ramming@egnition-hamburg.de", "image": "assets/images/team/2020/ole-ramming.jpg" },
            { "name": "Max Bormann", "job": "egn20 Support", "email": "max.bormann@egnition-hamburg.de", "image": "assets/images/team/2021/max-bormann.jpg" },
            { "name": "Ava Petridou", "job": "egn20 Support", "email": "ava.petridou@egnition-hamburg.de", "image": "assets/images/team/2020/ava-petridou.jpg" },
          ]
        },
        {
          "name": "Software",
          "members": [
            { "name": "Lasse Lüder", "job": "Head of Software", "email": "lasse.lueder@egnition-hamburg.de", "image": "assets/images/team/2021/lasse-lüder.jpg" },
            { "name": "Volker Neff", "job": "Embedded Software", "email": "volker.neff@egnition-hamburg.de", "image": "assets/images/team/2020/volker-neff.jpg" },
            { "name": "Constantin Duske", "job": "Embedded Software", "email": "constantin.duske@egnition-hamburg.de", "image": "assets/images/team/2021/constantin-duske.jpg" },
            { "name": "Razvan Draghici", "job": "Embedded Software", "email": "razvan.draghici@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Finn Meyer", "job": "Vehicle Controls", "email": "finn.meyer@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Mrunal Sompura", "job": "Vehicle Controls", "email": "mrunal.sompura@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Marius Ramcke", "job": "DV Controls", "email": "marius.ramcke@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Talgat Alimbayev", "job": "State Estimation", "email": "talgat.alimbayev@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Adithya Ravi", "job": "Cameras", "email": "aditha.ravi@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Sven Brauer", "job": "Path Planning", "email": "sven.brauer@egnition-hamburg.de", "image": "assets/images/team/2020/sven-brauer.jpg" },
            { "name": "Florian Cordes", "job": "Thesis Cameras", "email": "florian.cordes@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Nilas Junge", "job": "Thesis MPC", "email": "nilas.junge@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Astiaj Fard", "job": "Thesis", "email": "astiaj.fard@egnition-hamburg.de", "image": "assets/images/team/2020/astiaj-fard.jpg" },
            { "name": "Jana Dörrbecker", "job": "egn20 Support", "email": "jana.doerrbecker@egnition-hamburg.de", "image": "assets/images/team/2020/jana-dörrbecker.jpg" },
            ]
        },
        {
          "name": "Statics",
          "members": [
            { "name": "Yannick Auth", "job": "Head of Statics", "email": "yannick.auth@egnition-hamburg.de", "image": "assets/images/team/2021/yannick-auth.jpg" },
            { "name": "Arvind Venkatanarasimhan", "job": "Business Plan Presentation", "email": "arvind.venkatanarasimhan@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Hrishabh Shetty", "job": "Business Plan Presentation", "email": "hrishabh.shetty@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Recep Savas", "job": "Business Plan Presentation", "email": "recep.savas@egnition-hamburg.de", "image": "assets/images/team/2021/placeholder.jpg" },
            { "name": "Stephen Ong", "job": "Business Plan Presentation Support", "email": "stephen.ong@egnition-hamburg.de", "image": "assets/images/team/2021/stephen-ong.jpg" },
          ]
        }

  ],
     "egn20": [
    {
      "name": "Core Team",
      "members": [
        {
          "name": "Yannick Auth",
          "job": "Team Captain & Head of Finances, Statics",
          "email": "yannick.auth@egnition-hamburg.de",
          "image": "assets/images/team/2020/yannick-auth.jpg",
        },
        {
          "name": "Alexander Christ",
          "job": "Head of Marketing",
          "email": "alexander.christ@egnition-hamburg.de",
          "image": "assets/images/team/2020/alexander-christ.jpg",
        },
        {
          "name": "Noah Ohlmann",
          "job": "Technical Director",
          "email": "noah.ohlmann@egnition-hamburg.de",
          "image": "assets/images/team/2019/noah-ohlmann.jpg",
        },
        {
          "name": "Jan Philipp Weiland",
          "job": "Technical Director",
          "email": "jan.weiland@egnition-hamburg.de",
          "image": "assets/images/team/2020/jan-philipp-weiland.jpg",
        },
        {
          "name": "Hendrik Doß",
          "job": "Head of Aerodynamics",
          "email": "hendrik.doss@egnition-hamburg.de",
          "image": "assets/images/team/2020/hendrik-doss.jpg",
        },
        {
          "name": "Finn Heydebreck",
          "job": "Head of Chassis",
          "email": "finn.heydebreck@egnition-hamburg.de",
          "image": "assets/images/team/2020/finn-heydebreck.jpg",
        },
        {
          "name": "Sarah Klass",
          "job": "Head of Electronics",
          "email": "sarah.klass@egnition-hamburg.de",
          "image": "assets/images/team/2020/sarah-klass.jpg",
        },
        {
          "name": "Niklas Trekel",
          "job": "Head of Suspension",
          "email": "niklas.trekel@egnition-hamburg.de",
          "image": "assets/images/team/2020/niklas-trekel.jpg",
        },
        {
          "name": "Jan Runge",
          "job": "Head of Embedded Systems",
          "email": "jan.runge@egnition-hamburg.de",
          "image": "assets/images/team/2019/jan-runge.jpg",
        },
        {
          "name": "Felix Scheikowski",
          "job": "Head of Driverless",
          "email": "felix.scheikowski@egnition-hamburg.de",
          "image": "assets/images/team/2020/felix-scheikowski.jpg",
        },
      ]
    },
    {
      "name": "Finance",
      "members": [
        { "name": "Yannick Auth", "job": "Head of Finance", "email": "yannick.auth@egnition-hamburg.de", "image": "assets/images/team/2020/yannick-auth.jpg" }
      ]
    },
    {
      "name": "Marketing",
      "members": [
        { "name": "Alexander Christ", "job": "Head of Marketing", "email": "alexander.christ@egnition-hamburg.de", "image": "assets/images/team/2020/alexander-christ.jpg"},
        { "name": "Alexa Sehlbach", "job": "Design", "email": "alexa.sehlbach@egnition-hamburg.de", "image": "assets/images/team/2020/alexa-sehlbach.jpg" },
        { "name": "Louis Wähnert", "job": "Website", "email": "louis.waehnert@egnition-hamburg.de", "image": "assets/images/team/2019/louis-waehnert.jpg" },
        { "name": "Julia Auge", "job": "Internal Team Orga", "email": "julia.auge@egnition-hamburg.de", "image": "assets/images/team/2020/julia-auge.jpg" },
        ]
    },
    {
      "name": "Statics",
      "members": [
        { "name": "Yannick Auth", "job": "Head of Statics", "email": "yannick.auth@egnition-hamburg.de", "image": "assets/images/team/2020/yannick-auth.jpg" },
        { "name": "Leonard Möller", "job": "Head of CME", "email": "leonard.moeller@egnition-hamburg.de", "image": "assets/images/team/2019/leonard-moeller.jpg" },
        { "name": "Rakshith Sudarshana", "job": "CME", "email": "rakshith.sudarshana@egnition-hamburg.de", "image": "assets/images/team/2020/rakshith-sudarshana.jpg" },
        { "name": "Anish Sodankooru", "job": "BPP", "email": "anish.sodankooru@egnition-hamburg.de", "image": "assets/images/team/2020/anish-sodankooru.jpg" },
        { "name": "Ashwin Kudva", "job": "BPP", "email": "ashvin.kudva@egnition-hamburg.de", "image": "assets/images/team/2020/placeholder.jpg" },
        { "name": "Asmita Rao", "job": "BPP", "email": "asmita.rao@egnition-hamburg.de", "image": "assets/images/team/2020/placeholder.jpg" },
       ]
        },
        {
          "name": "Suspension",
          "members": [
            { "name": "Niklas Trekel", "job": "Head of Suspension", "email": "niklas.trekel@egnition-hamburg.de", "image": "assets/images/team/2020/niklas-trekel.jpg" },
            { "name": "Li-Chung Wang", "job": "Brakes", "email": "li-chung.wang@egnition-hamburg.de", "image": "assets/images/team/2020/li-chung-wang.jpg" },
            { "name": "Julia Wüpperling", "job": "FDS", "email": "julia.wuepperling@egnition-hamburg.de", "image": "assets/images/team/2020/julia-wüpperling.jpg" },
            { "name": "Emil Stahl", "job": "Kinematics", "email": "emil.stahl@egnition-hamburg.de", "image": "assets/images/team/2020/emil-stahl.jpg" },
            { "name": "Jan Sarbach", "job": "Wheel Hub, Gears", "email": "jan.sarbach@egnition-hamburg.de", "image": "assets/images/team/2020/jan-sarbach.jpg" },
            { "name": "Dimitry Mayzelis", "job": "Wheel Carrier", "email": "dimitry.mayzelis@egnition-hamburg.e", "image": "assets/images/team/2020/dimitry-mayzelis.jpg" },
            { "name": "Ole Ramming", "job": "DV Actuation", "email": "ole.ramming@egnition-hamburg.de", "image": "assets/images/team/2020/ole-ramming.jpg" },
            { "name": "Astiaj Fard", "job": "Pedalbox", "email": "astiaj.fard@egnition-hamburg.de", "image": "assets/images/team/2020/astiaj-fard.jpg" },
            { "name": "Moritz Brandl", "job": "Laptime Simulation", "email": "moritz.brandl@egnition-hamburg.de", "image": "assets/images/team/2020/placeholder.jpg" },
            { "name": "Carl Bildau", "job": "Steering", "email": "carl.bildau@egnition-hamburg.de", "image": "assets/images/team/2020/carl-bildau.jpg" },
            { "name": "Ava Petridou", "job": "Wheel Suspension", "email": "ava.petridou@egnition-hamburg.de", "image": "assets/images/team/2020/ava-petridou.jpg" },
            { "name": "Sören Bähr", "job": "Steering", "email": "soeren.baehr@egnition-hamburg.de", "image": "assets/images/team/2020/sören-bähr.jpg" },
          ]
        },
        {
          "name": "Chassis",
          "members": [
            { "name": "Finn Heydebreck", "job": "Head of Chassis", "email": "finn.heydebreck@egnition-hamburg.de", "image": "assets/images/team/2020/finn-heydebreck.jpg" },
            { "name": "Leander Raabe", "job": "Mono Support", "email": "leander.raabe@egnition-hamburg.de", "image": "assets/images/team/2020/leander-raabe.jpg" },
            { "name": "Jan Sarach", "job": "Monocoque", "email": "jan.sarach@egnition-hamburg.de", "image": "assets/images/team/2020/jan-sarach.jpg" },
            { "name": "Jonas Schimmöller", "job": "Steering Sheel", "email": "jonas.schimmoeller@egnition-hamburg.de", "image": "assets/images/team/2020/jonas-schimmöller.jpg" },
            { "name": "Yiamin Jin", "job": "Accubox", "email": "jin.yiamin@egnition-hamburg.de", "image": "assets/images/team/2020/jiamin-yin.jpg" },
            { "name": "Jannik Grashoff", "job": "Simulation", "email": "jannik.grashoff@egnition-hamburg.de", "image": "assets/images/team/2020/jannik-grashoff.jpg" },
            { "name": "Salih Düzgüner", "job": "Ergonomics", "email": "salih.duezguener@egnition-hamburg.de", "image": "assets/images/team/2020/salih-düzgüner.jpg" },
            { "name": "Max Bormann", "job": "CFRP Film", "email": "max.bormann@egnition-hamburg.de", "image": "assets/images/team/2020/max-bormann.jpg" },
            { "name": "Florans Afshar", "job": "SES, AIP, Cutting", "email": "florans.afshar@egnition-hamburg.de", "image": "assets/images/team/2020/florans-afshar.jpg" },
            { "name": "Alexander Wulsten", "job": "Manufacturing", "email": "alexander.wulsten@egnition-hamburg.de", "image": "assets/images/team/2020/alexander-wulsten.jpg" },
           ]
        },
        {
          "name": "Aerodynamics",
          "members": [
            { "name": "Hendrik Doß", "job": "Head of Aerodynamics", "email": "hendrik.doss@egnition-hamburg.de", "image": "assets/images/team/2020/hendrik-doss.jpg" },
            { "name": "Simon Abbing", "job": "Group Leader Aerodesign", "email": "simon.abbing@egnition-hamburg.de", "image": "assets/images/team/2020/simon-abbing.jpg" },
            { "name": "Leighton Clague", "job": "Cooling Simulation", "email": "leighton.clague@egnition-hamburg.de", "image": "assets/images/team/2020/leighton-clague.jpg" },
            { "name": "Alexander Grundmann", "job": "Partdesign Simulation & Optimization", "email": "alexander.grundmann@egnition-hamburg.de", "image": "assets/images/team/2020/alexander-grundmann.jpg" },
            { "name": "Gökdeniz Havuc", "job": "Testing and test planning", "email": "goekdeniz.havuc@egnition-hamburg.de", "image": "assets/images/team/2020/gökdeniz-havuc.jpg" },
            { "name": "Maximilian Heine", "job": "Undertray", "email": "maximilian.heine@egnition-hamburg.de", "image": "assets/images/team/2020/maximilian-heine.jpg" },
            { "name": "Anna Hermann", "job": "Manufacturing Support", "email": "anna.hermann@egnition-hamburg.de", "image": "assets/images/team/2019/anna-hermann.jpg" },
            { "name": "Luca Luzi", "job": "Mechanics Rearwing", "email": "luca.luzi@egnition-hamburg.de", "image": "assets/images/team/2020/luca-luzi.jpg" },
            { "name": "Stephen Andy Ong", "job": "DRS", "email": "stephen.ong@egnition-hamburg.de", "image": "assets/images/team/2020/stephen-ong.jpg" },
            { "name": "Srishti Prasad", "job": "Simulation Vehicle Dynamics", "email": "srishti.prasad@egnition-hamburg.de", "image": "assets/images/team/2020/srishti-prasad.jpg" },
            { "name": "Lucas Rousselange", "job": "Mechanics Cooling", "email": "lucas.rousselange@egnition-hamburg.de", "image": "assets/images/team/2020/lucas-rousselange.jpg" },
            { "name": "Charlotte Tappeser", "job": "Rear Wing", "email": "charlotte.tappeser@egnition-hamburg.de", "image": "assets/images/team/2020/charlotte-tappeser.jpg" },
            ]
        },
        {
          "name": "Software",
          "members": [
            { "name": "Jan Runge", "job": "Head of Embedded Systems", "email": "jan.runge@egnition-hamburg.de", "image": "assets/images/team/2019/jan-runge.jpg" },
            { "name": "Felix Scheikowski", "job": "Head of Driverless", "email": "felix.scheikowski@egnition-hamburg.de", "image": "assets/images/team/2020/felix-scheikowski.jpg" },
            { "name": "Keerthan Kadajji", "job": "Controls", "email": "keerthan.kadajji@egnition-hamburg.de", "image": "assets/images/team/2020/keerthan-kadajji.jpg" },
            { "name": "Sven Brauer", "job": "Driverless", "email": "sven.brauer@egnition-hamburg.de", "image": "assets/images/team/2020/sven-brauer.jpg" },
            { "name": "Lasse Lüder", "job": "Driverless / Embedded Systems", "email": "lasse.lueder@egnition-hamburg.de", "image": "assets/images/team/2020/lasse-lueder.jpg" },
            { "name": "Rushit Shah", "job": "Controls", "email": "rushit.shah@egnition-hamburg.de", "image": "assets/images/team/2020/rushit-shah.jpg" },
            { "name": "Mrunal Sompura", "job": "Controls", "email": "mrunal.sompura@egnition-hamburg.de", "image": "assets/images/team/2020/mrunal-sompura.jpg" },
            { "name": "Florian Cordes", "job": "Driverless", "email": "florian.cordes@egnition-hamburg.de", "image": "assets/images/team/2020/florian-cordes.jpg" },
            { "name": "Akshay Shetty", "job": "Driverless", "email": "akshay.shetty@egnition-hamburg.de", "image": "assets/images/team/2020/akshay-shetty.jpg" },
            { "name": "Jana Dörrbecker", "job": "Embedded Systems", "email": "jana.doerrbeckerg@egnition-hamburg.de", "image": "assets/images/team/2020/jana-dörrbecker.jpg" },
            { "name": "Volker Neff", "job": "Support", "email": "volker.neff@egnition-hamburg.de", "image": "assets/images/team/2020/volker-neff.jpg" },
            { "name": "Marius Ramcke", "job": "Controls", "email": "marius.ramcke@egnition-hamburg.de", "image": "assets/images/team/2020/placeholder.jpg" },
            { "name": "Prad Hyuman", "job": "DV Controls", "email": "prad.hyuman@egnition-hamburg.de", "image": "assets/images/team/2020/prad-hyuman.jpg" },
          ]
        },
        {
          "name": "Electronics",
          "members": [
            { "name": "Sarah Klass", "job": "Head of Electronics", "email": "sarah.klasss@egnition-hamburg.de", "image": "assets/images/team/2020/sarah-klass.jpg" },
            { "name": "Pascal Koch", "job": "BMS", "email": "pascal.koch@egnition-hamburg.de", "image": "assets/images/team/2020/placeholder.jpg" },
            { "name": "Matthias Renz", "job": "HV Components", "email": "matthias.renz@egnition-hamburg.de", "image": "assets/images/team/2020/matthias-renz.jpg" },
            { "name": "Timon Suhk", "job": "ACU", "email": "timon.suhk@egnition-hamburg.de", "image": "assets/images/team/2020/timon-suhk.jpg" },
            { "name": "Felix Wierlemann", "job": "E2C, Sensorboard", "email": "felix.wierlermann@egnition-hamburg.de", "image": "assets/images/team/2020/felix-wierlemann.jpg" },
            { "name": "Jonas Hasmann", "job": "TSAL", "email": "jonas.hasmann@egnition-hamburg.de", "image": "assets/images/team/2019/jonas-hasmann.jpg" },
            { "name": "Marcel Haack", "job": "BSPD", "email": "marcel.haack@egnition-hamburg.de", "image": "assets/images/team/2020/marcel-haack.jpg" },
            { "name": "Vasileios Gkagkanos", "job": "Dashboard & Display", "email": "vasileios.gkagkanos@egnition-hamburg.de", "image": "assets/images/team/2020/vasileios-gkagkanos.jpg" },
            { "name": "Hanne Binkau", "job": "EBS, ASSI, DV Components", "email": "hanne.binkau@egnition-hamburg.de", "image": "assets/images/team/2020/hanne-binkau.jpg" },
            { "name": "Nils Bade", "job": "Sicherungsplatine", "email": "nils.bade@egnition-hamburg.de", "image": "assets/images/team/2020/nils-bade.jpg" },
            { "name": "Simeon Simeonov", "job": "Light Barrier", "email": "simeon.simeonov@egnition-hamburg.de", "image": "assets/images/team/2020/simeon-simeonov.jpg" },
            { "name": "Sajidul Qadir", "job": "Boardcomputer", "email": "sajid.qadir@egnition-hamburg.de", "image": "assets/images/team/2020/placeholder.jpg" },
          ]
        },

  ],
    "egn19": [
    {
      "name": "Core Team",
      "members": [
        {
          "name": "Leonard Moeller",
          "job": "Team Captain",
          "email": "",
          "image": "assets/images/team/2019/leonard-moeller.jpg",
        },
        {
          "name": "Sven Brauer",
          "job": "Technical Director",
          "email": "",
          "image": "assets/images/team/2019/sven-brauer.jpg",
        },
        {
          "name": "Pascal Inselmann",
          "job": "Technical Director",
          "email": "",
          "image": "assets/images/team/2019/pascal-inselmann.jpg",
        },
        {
          "name": "Jan Bonke",
          "job": "Head of Finance",
          "email": "",
          "image": "assets/images/team/2019/jan-bonke.jpg",
        },
        {
          "name": "Louis Wähnert",
          "job": "Head of Marketing",
          "email": "",
          "image": "assets/images/team/2019/louis-waehnert.jpg",
        },
        {
          "name": "Sören Frademann",
          "job": "Head of Marketing",
          "email": "",
          "image": "assets/images/team/2019/soeren-frademann.jpg",
        },
        {
          "name": "Alexander Grundmann",
          "job": "Head of Aerodynamics",
          "email": "",
          "image": "assets/images/team/2019/alexander-grundmann.jpg",
        },
        {
          "name": "Daniel Thews",
          "job": "Head of Suspension",
          "email": "",
          "image": "assets/images/team/2019/daniel-thews.jpg",
        },
        {
          "name": "Julian Lobisch",
          "job": "Head of Software",
          "email": "",
          "image": "assets/images/team/2019/julian-lobisch.jpg",
        },
        {
          "name": "Tobias Ansorg",
          "job": "Head of Chassis",
          "email": "",
          "image": "assets/images/team/2019/tobias-ansorg.jpg",
        },
        {
          "name": "Jan Runge",
          "job": "Head of Embedded Systems",
          "email": "",
          "image": "assets/images/team/2019/jan-runge.jpg",
        },
        {
          "name": "Sivanand Shankar",
          "job": "Head of Controls",
          "email": "",
          "image": "assets/images/team/2019/sivanand-shankar.jpg",
        },
      ]
    },
    {
      "name": "Finance",
      "members": [
        { "name": "Jan Bonke", "job": "Head of Finance", "email": "", "image": "assets/images/team/2019/jan-bonke.jpg" }
      ]
    },
    {
      "name": "Marketing",
      "members": [
        { "name": "Louis Wähnert", "job": "Head of Marketing", "email": "", "image": "assets/images/team/2019/louis-waehnert.jpg"},
        { "name": "Sören Frademann", "job": "Head of Marketing", "email": "", "image": "assets/images/team/2019/soeren-frademann.jpg" },
        { "name": "Alexander Christ", "job": "Design", "email": "", "image": "assets/images/team/2019/alexander-christ.jpg" },
        { "name": "Stephen Andy Ong", "job": "Renderings", "email": "", "image": "assets/images/team/2019/stephen-andy-ong.jpg" },
        { "name": "Julia Auge", "job": "Sponsoring", "email": "", "image": "assets/images/team/2019/julia-auge.jpg" },
        { "name": "Alexa Sehlbach", "job": "Support", "email": "", "image": "assets/images/team/2019/alexa-sehlbach.jpg" },
        { "name": "Michael Rohrer", "job": "Videos and Pictures", "email": "", "image": "assets/images/team/2019/michael-rohrer.jpg" },
        ]
    },
    {
      "name": "Statics",
      "members": [
        { "name": "Janine Boldt", "job": "Business Plan", "email": "", "image": "assets/images/team/2019/janine-boldt.jpg" },
        { "name": "Jan Bonke", "job": "Business Plan", "email": "", "image": "assets/images/team/2019/jan-bonke.jpg" },
        { "name": "Sören Frademann", "job": "Business Plan", "email": "", "image": "assets/images/team/2019/soeren-frademann.jpg" },
        { "name": "Niels Johnsen", "job": "CME", "email": "", "image": "assets/images/team/2019/niels-johnsen.jpg" },
        ]
        },
        {
          "name": "Suspension",
          "members": [
            { "name": "Daniel Thews", "job": "Head of Suspension", "email": "", "image": "assets/images/team/2019/daniel-thews.jpg" },
            { "name": "Floyd Bishop", "job": "Cooling Systems", "email": "", "image": "assets/images/team/2019/floyd-bishop.jpg" },
            { "name": "Jan Sarbach", "job": "Wheel Hub. Gears", "email": "", "image": "assets/images/team/2019/jan-sarbach.jpg" },
            { "name": "Jan Philipp Weiland", "job": "SDS", "email": "", "image": "assets/images/team/2019/jan-philipp-weiland.jpg" },
            { "name": "Lea Kraus", "job": "Pedals", "email": "", "image": "assets/images/team/2019/lea-kraus.jpg" },
            { "name": "Maximilian Heine", "job": "Wheel Suspension", "email": "", "image": "assets/images/team/2019/maximilian-heine.jpg" },
            { "name": "Niklas Trekel", "job": "Wheel Carrier", "email": "", "image": "assets/images/team/2019/niklas-trekel.jpg" },
            { "name": "Pedro Bianchi", "job": "Motors", "email": "", "image": "assets/images/team/2019/pedro-bianchi.jpg" },
            { "name": "Carl Alexander Bildau", "job": "Support", "email": "", "image": "assets/images/team/2019/placeholder.jpg" },
            { "name": "Sönke Matthiesen", "job": "Kinematics", "email": "", "image": "assets/images/team/2019/soenke-matthiesen.jpg" },
            { "name": "Till Stobbe", "job": "Brakes", "email": "", "image": "assets/images/team/2019/till-stobbe.jpg" },
            { "name": "Torben Deutschmann", "job": "Steering", "email": "", "image": "assets/images/team/2019/torben-deutschmann.jpg" },
          ]
        },
        {
          "name": "Chassis",
          "members": [
            { "name": "Tobias Ansorg", "job": "Head of Chassis", "email": "", "image": "assets/images/team/2019/tobias-ansorg.jpg" },
            { "name": "Anna Hermann", "job": "Ergonomics", "email": "", "image": "assets/images/team/2019/anna-hermann.jpg" },
            { "name": "Fabian Frenzel", "job": "Dynamic Trolley", "email": "", "image": "assets/images/team/2019/fabian-frenzel.jpg" },
            { "name": "Felix Scherer", "job": "Monocoque", "email": "", "image": "assets/images/team/2019/felix-scherer.jpg" },
            { "name": "Jan Sarach", "job": "Monocoque Support, Housing", "email": "", "image": "assets/images/team/2019/jan-sarach.jpg" },
            { "name": "Jonas Schimmöller", "job": "Support", "email": "", "image": "assets/images/team/2019/jonas-schimmoeller.jpg" },
            { "name": "Marven Mehring", "job": "Akkubox", "email": "", "image": "assets/images/team/2019/marven-mehring.jpg" },
            { "name": "Max Bormann", "job": "CFRP Film", "email": "max.bormann@egnition-hamburg.de", "image": "assets/images/team/2020/max-bormann.jpg" },
            { "name": "Niklas Thordsen", "job": "Monocoque Simulation", "email": "", "image": "assets/images/team/2019/niklas-thordsen.jpg" },
            { "name": "Roman Sartorti", "job": "Crashbox", "email": "", "image": "assets/images/team/2019/roman-sartorti.jpg" },
            { "name": "Tobias Tiedemann", "job": "SES", "email": "", "image": "assets/images/team/2019/tobias-tiedemann.jpg" },
            { "name": "Yannick Auth", "job": "Support", "email": "", "image": "assets/images/team/2019/yannick-auth.jpg" },
            { "name": "Håvard Teigen", "job": "Support", "email": "", "image": "assets/images/team/2019/havard-teigen.jpg" },
           ]
        },
        {
          "name": "Aerodynamics",
          "members": [
            { "name": "Alexander Grundmann", "job": "Head of Aerodynamics", "email": "", "image": "assets/images/team/2019/alexander-grundmann.jpg" },
            { "name": "Eugen Grishchenko", "job": "Simulations", "email": "", "image": "assets/images/team/2019/eugen-grishchenko.jpg" },
            { "name": "Finn Heydebreck", "job": "Inner Structure, Mounting", "email": "", "image": "assets/images/team/2019/finn-heydebreck.jpg" },
            { "name": "Tristan Ehlert", "job": "Simulations", "email": "", "image": "assets/images/team/2019/tristan-ehlert.jpg" },
            { "name": "Leighton Clague", "job": "Cooling", "email": "", "image": "assets/images/team/2019/leighton-clague.jpg" },
            { "name": "Srishti Prasad", "job": "Undertray", "email": "", "image": "assets/images/team/2019/placeholder.jpg" },
            { "name": "Manuel Schulte", "job": "Simulations", "email": "", "image": "assets/images/team/2019/manuel-schulte.jpg" },
            ]
        },
        {
          "name": "Driverless & Embedded Systems",
          "members": [
            { "name": "Julian Lobisch", "job": "Head of Software", "email": "", "image": "assets/images/team/2019/julian-lobisch.jpg" },
            { "name": "Jan Runge", "job": "Head of Embedded", "email": "", "image": "assets/images/team/2019/jan-runge.jpg" },
            { "name": "Sivanand Shankar", "job": "Head of Controls", "email": "", "image": "assets/images/team/2019/sivanand-shankar.jpg" },
            { "name": "Ashwin Sundarka", "job": "Power Control", "email": "", "image": "assets/images/team/2019/ashwin-sundarka.jpg" },
            { "name": "Jana Dörrbecker", "job": "Embedded Systems", "email": "", "image": "assets/images/team/2019/jana-doerrbecker.jpg" },
            { "name": "Lionell Will", "job": "Driverless LiDAR Vision", "email": "", "image": "assets/images/team/2019/lionell-will.jpg" },
            { "name": "Ozan Gungör", "job": "Driverless LiDAR Vision", "email": "", "image": "assets/images/team/2019/ozan-gungoer.jpg" },
            { "name": "Sai Preetham Sata", "job": "Driverless Camera", "email": "", "image": "assets/images/team/2019/sai-preetham-sata.jpg" },
            { "name": "John Mockler", "job": "Support", "email": "", "image": "assets/images/team/2019/john-mockler.jpg" },
            { "name": "Florian Cordes", "job": "Vision", "email": "", "image": "assets/images/team/2019/florian-cordes.jpg" },
            { "name": "Felix Scheikowski", "job": "Driverless", "email": "", "image": "assets/images/team/2019/placeholder.jpg" },
            { "name": "Maximilian Zeller", "job": "Controls", "email": "", "image": "assets/images/team/2020/placeholder.jpg" },
            { "name": "Timo Kortbrae", "job": "Embedded Systems", "email": "", "image": "assets/images/team/2019/timo-kortbrae.jpg" },
            { "name": "Varun Jois", "job": "Driverlless Gazebo Simulation", "email": "", "image": "assets/images/team/2019/varun-jois.jpg" },
          ]
        },
        {
          "name": "Electronics",
          "members": [
            { "name": "Lars-Ole Schliefkowitz", "job": "Head of Electronics", "email": "", "image": "assets/images/team/2019/lars-ole-schliefkowitz.jpg" },
            { "name": "Hanne Binkau", "job": "Sensor Board", "email": "", "image": "assets/images/team/2019/hanne-binkau.jpg" },
            { "name": "Jonas Hasmann", "job": "HV Circuit", "email": "", "image": "assets/images/team/2019/jonas-hasmann.jpg" },
            { "name": "Kay-Ove Jensen", "job": "ACU", "email": "", "image": "assets/images/team/2019/kay-ove-jensen.jpg" },
            { "name": "Marcel Haack", "job": "IMU, BMS", "email": "", "image": "assets/images/team/2019/marcel-haack.jpg" },
            { "name": "Noah Ohlmann", "job": "Wire Harness", "email": "", "image": "assets/images/team/2019/noah-ohlmann.jpg" },
            { "name": "Nils Reimer", "job": "Support", "email": "", "image": "assets/images/team/2019/nils-reimer.jpg" },
            { "name": "Robert Annuth", "job": "Timekeeping", "email": "", "image": "assets/images/team/2019/placeholder.jpg" },
            { "name": "Nils Bade", "job": "Support", "email": "", "image": "assets/images/team/2019/nils-bade.jpg" },
            { "name": "Omar Dradrya", "job": "Support", "email": "", "image": "assets/images/team/2019/omar-draydrya.jpg" },
            { "name": "Sarah Klass", "job": "HV Components", "email": "", "image": "assets/images/team/2019/sarah-klass.jpg" },
            ]
        },

  ],
   "egn18": [
    {
      "name": "Core Team",
      "members": [
        {
          "name": "Floyd Bischop",
          "job": "Team Captain",
          "email": "",
          "image": "assets/images/team/2018/floyd-bischop.jpg",
        },
        {
          "name": "Maximilian Künne",
          "job": "Head of Technique",
          "email": "",
          "image": "assets/images/team/2018/maximilian-kuenne.jpg",
        },
        {
          "name": "Carl Johann Giest",
          "job": "Head of Driverless",
          "email": "",
          "image": "assets/images/team/2018/carl-giest.jpg",
        },
        {
          "name": "Janine Alt",
          "job": "Head of Finance",
          "email": "",
          "image": "assets/images/team/2018/janine-alt.jpg",
        },
        {
          "name": "Sebastian Griep",
          "job": "Head of Marketing",
          "email": "",
          "image": "assets/images/team/2018/sebastian-griep.jpg",
        },
        {
          "name": "Sebastian Block",
          "job": "Head of Aerodynamics",
          "email": "",
          "image": "assets/images/team/2018/sebastian-block.jpg",
        },
        {
          "name": "Hendrik Doß",
          "job": "Head of Suspension",
          "email": "",
          "image": "assets/images/team/2018/hendrik-doss.jpg",
        },
        {
          "name": "Timo Kortbrae",
          "job": "Head of Software",
          "email": "",
          "image": "assets/images/team/2018/timo-kortbrae.jpg",
        },
        {
          "name": "Tobias Tiedemann",
          "job": "Head of Chassis",
          "email": "",
          "image": "assets/images/team/2018/tobias-tiedemann.jpg",
        },
        {
          "name": "Robert Oehlmann",
          "job": "Head of Software",
          "email": "",
          "image": "assets/images/team/2018/robert-oehlmann.jpg",
        },
         {
          "name": "Pascal Koch",
          "job": "Head of Electronics",
          "email": "",
          "image": "assets/images/team/2018/pascal-koch.jpg",
        },
      ]
    },
    {
      "name": "Finance",
      "members": [
        { "name": "Janine Alt", "job": "Head of Finance", "email": "", "image": "assets/images/team/2018/janine-alt.jpg" }
      ]
    },
    {
      "name": "Marketing",
      "members": [
        { "name": "Sebastian Griep", "job": "Head of Marketing", "email": "", "image": "assets/images/team/2018/sebastian-griep.jpg"},
        { "name": "Hannes Piepenbrink", "job": "Sponsoring", "email": "", "image": "assets/images/team/2018/hannes-piepenbrink.jpg" },
        { "name": "Louis Wähnert", "job": "Design", "email": "", "image": "assets/images/team/2018/louis-waehnert.jpg" },
        { "name": "Sören Frademann", "job": "Newsletter and Social Media", "email": "", "image": "assets/images/team/2018/soeren-frademann.jpg" },
        { "name": "Michelle Schulze", "job": "Print Media and Organisation", "email": "", "image": "assets/images/team/2018/michelle-schulze.jpg" },
        ]
    },
    {
      "name": "Statics",
      "members": [
        { "name": "Janine Alt", "job": "Head of Statics", "email": "", "image": "assets/images/team/2018/janine-alt.jpg" },
        { "name": "David Hackenberger", "job": "Cost and Manufacturing", "email": "", "image": "assets/images/team/2018/david-hackenberger.jpg" },
        { "name": "Viveik Balakrishnan", "job": "Business Plan", "email": "", "image": "assets/images/team/2018/dummy.jpg" },
        { "name": "Jacqueline Bartsch", "job": "Business Plan", "email": "", "image": "assets/images/team/2018/jacqueline-bartsch.jpg" },
        { "name": "Jan Bonke", "job": "Business Plan", "email": "", "image": "assets/images/team/2018/dummy.jpg" },  
        { "name": "Nyian Shi-Kuan", "job": "Business Plan", "email": "", "image": "assets/images/team/2018/nyian-shi-kuan.jpg" },
      ]
        },
        {
          "name": "Suspension",
          "members": [
            { "name": "Hendrik Doß", "job": "Head of Suspension", "email": "", "image": "assets/images/team/2018/hendrik-doss.jpg" },
            { "name": "Michael Jasinski", "job": "Gear", "email": "", "image": "assets/images/team/2018/michael-jasinski.jpg" },
            { "name": "Michael Rohrer", "job": "Brake System", "email": "", "image": "assets/images/team/2018/michael-rohrer.jpg" },
            { "name": "Daniel Thews", "job": "SDS", "email": "", "image": "assets/images/team/2018/daniel-thews.jpg" },
            { "name": "Marius Khoury", "job": "Pedal Box", "email": "", "image": "assets/images/team/2018/marius-khoury.jpg" },
            { "name": "Sönke Matthiesen", "job": "Kinematics", "email": "", "image": "assets/images/team/2018/soenke-matthiesen.jpg" },
            { "name": "Tobias Ansorg", "job": "Wheel Carrier", "email": "", "image": "assets/images/team/2018/tobias-ansorg.jpg" },
            { "name": "Pascal Inselmann", "job": "Wheel Suspension", "email": "", "image": "assets/images/team/2018/pascal-inselmann.jpg" },
            { "name": "Juri Piwkowski", "job": "Wheel Hub", "email": "", "image": "assets/images/team/2018/juri-piwkowski.jpg" },
            { "name": "Torben Deutschmann", "job": "Steering", "email": "", "image": "assets/images/team/2018/torben-deutschmann.jpg" },
          ]
        },
        {
          "name": "Chassis",
          "members": [
            { "name": "Tobias Tiedemann", "job": "Head of Chassis", "email": "", "image": "assets/images/team/2018/tobias-tiedemann.jpg" },
            { "name": "Leonard Möller", "job": "Monocoque", "email": "", "image": "assets/images/team/2018/leonard-moeller.jpg" },
            { "name": "Marc Lüdcke", "job": "Dynamics Trolley", "email": "", "image": "assets/images/team/2018/marc-luedcke.jpg" },
            { "name": "Nilas Junge", "job": "Production", "email": "", "image": "assets/images/team/2018/dummy.jpg" },
            { "name": "Maximilian Bormann", "job": "Ergonomics", "email": "", "image": "assets/images/team/2018/maximilian-bormann.jpg" },
            { "name": "Jonas Schimmöller", "job": "Monocoque", "email": "", "image": "assets/images/team/2018/jonas-schimmoeller.jpg" },
            { "name": "Torben Wagner", "job": "Dynamics Trolley", "email": "", "image": "assets/images/team/2018/torben-wagner.jpg" },
            { "name": "Steven Simon Lohmann", "job": "Motorcontroller Box", "email": "", "image": "assets/images/team/2018/steven-lohmann.jpg" },
            { "name": "Franziska Sommer", "job": "Monocoque Simulation", "email": "", "image": "assets/images/team/2018/franziska-sommer.jpg" },
            { "name": "Fabian Frenzel", "job": "Accumulator Box", "email": "", "image": "assets/images/team/2018/fabian-frenzel.jpg" },
           ]
        },
        {
          "name": "Aerodynamics",
          "members": [
            { "name": "Sebastian Block", "job": "Head of Aerodynamics", "email": "", "image": "assets/images/team/2018/sebastian-block.jpg" },
            { "name": "Larissa Fink", "job": "Rearwing", "email": "", "image": "assets/images/team/2018/larissa-fink.jpg" },
            { "name": "Johanna Strufe", "job": "Frontwing", "email": "", "image": "assets/images/team/2018/johanna-strufe.jpg" },
            { "name": "Atilla Yagcioglu", "job": "DRS", "email": "", "image": "assets/images/team/2018/atilla-yagcioglu.jpg" },
            { "name": "Moritz Henkel", "job": "Coverings", "email": "", "image": "assets/images/team/2018/moritz-henkel.jpg" },
            { "name": "Sven Brauer", "job": "Cooling System", "email": "", "image": "assets/images/team/2018/sven-brauer.jpg" },
            { "name": "Niklas Thordsen", "job": "Attachment", "email": "", "image": "assets/images/team/2018/niklas-thordsen.jpg" },
            { "name": "Paul Over", "job": "Simulation", "email": "", "image": "assets/images/team/2018/paul-over.jpg" },
            { "name": "Felix Scherer", "job": "Cooling System", "email": "", "image": "assets/images/team/2018/felix-scherer.jpg" },
            { "name": "Alexander Grundmann", "job": "Undertray", "email": "", "image": "assets/images/team/2018/alexander-grundmann.jpg" },
            ]
        },
        {
          "name": "Software",
          "members": [
            { "name": "Timo Kortbrae", "job": "Head of Software", "email": "", "image": "assets/images/team/2018/timo-kortbrae.jpg" },
            { "name": "Robert Oehlmann", "job": "Head of Software", "email": "", "image": "assets/images/team/2018/robert-oehlmann.jpg" },
            { "name": "Zichong Lu", "job": "Vi Grade", "email": "", "image": "assets/images/team/2018/zichong-lu.jpg" },
            { "name": "Maxim Yastremsky", "job": "Path Planning", "email": "", "image": "assets/images/team/2018/maxim-yastremsky.jpg" },
            { "name": "Alexander Hermann", "job": "Plan", "email": "", "image": "assets/images/team/2018/alexander-hermann.jpg" },
            { "name": "Sören Erichsen", "job": "Vision", "email": "", "image": "assets/images/team/2018/soeren-erichsen.jpg" },
            { "name": "Julian Lobisch", "job": "State Estimation", "email": "", "image": "assets/images/team/2018/julian-lobisch.jpg" },
            { "name": "Thomas Pohl", "job": "Software", "email": "", "image": "assets/images/team/2018/thomas-pohl.jpg" },
            { "name": "Terry Mack", "job": "Vision", "email": "", "image": "assets/images/team/2018/dummy.jpg" },
            { "name": "Shando Shanty", "job": "System Failure", "email": "", "image": "assets/images/team/2018/shando-shanty.jpg" },
            { "name": "Leon Teng", "job": "System Failure", "email": "", "image": "assets/images/team/2018/leon-teng.jpg" },
            { "name": "Miguel Wesselmann", "job": "Support", "email": "", "image": "assets/images/team/2018/miguel-wesselmann.jpg" },
            { "name": "Sivanand Shankar", "job": "Velocity Estimation", "email": "", "image": "assets/images/team/2018/sivanand-shankar.jpg" },
            ]
        },
        {
          "name": "Electronics",
          "members": [
            { "name": "Pascal Koch", "job": "Head of Electronics", "email": "", "image": "assets/images/team/2018/pascal-koch.jpg" },
            { "name": "Lennart Alff", "job": "Electronical Components", "email": "", "image": "assets/images/team/2018/lennart-alff.jpg" },
            { "name": "Jonas Hasmann", "job": "Support", "email": "", "image": "assets/images/team/2018/jonas-hasmann.jpg" },
            { "name": "Manuel Hess", "job": "Timekeeping", "email": "", "image": "assets/images/team/2018/manuel-hess.jpg" },
            { "name": "Noah Ohlmann", "job": "Support", "email": "", "image": "assets/images/team/2018/noah-ohlmann.jpg" },
            { "name": "Sarah Klass", "job": "Support", "email": "", "image": "assets/images/team/2018/sarah-klass.jpg" },
            { "name": "Valentin Resapow", "job": "Display Board", "email": "", "image": "assets/images/team/2018/valentin-resapow.jpg" },
            { "name": "Joshua von Horn", "job": "Wiring Harness", "email": "", "image": "assets/images/team/2018/joshua-von-horn.jpg" },
            { "name": "Jan von Krosigk", "job": "BMS", "email": "", "image": "assets/images/team/2018/jan-von-krosigk.jpg" },
            { "name": "Jan Schmitt", "job": "HV Components", "email": "", "image": "assets/images/team/2018/jan-schmitt.jpg" },
            { "name": "Rene Voigt", "job": "ACU, HV-PCB, BSPD", "email": "", "image": "assets/images/team/2018/rene-voigt.jpg" },
            ]
        },
      {
          "name": "Driverless",
          "members": [
            { "name": "Carl Johann Giest", "job": "Head of Driverless", "email": "", "image": "assets/images/team/2018/carl-giest.jpg" },
            { "name": "Ole Ramming", "job": "Mechanics", "email": "", "image": "assets/images/team/2018/ole-ramming.jpg" },
            { "name": "Zichong Lu", "job": "Vi Grade", "email": "", "image": "assets/images/team/2018/zichong-lu.jpg" },
            { "name": "Lennart Alff", "job": "Electronic", "email": "", "image": "assets/images/team/2018/lennart-alff.jpg" },
            { "name": "Maxim Yastremsky", "job": "Path Planning", "email": "", "image": "assets/images/team/2018/maxim-yastremsky.jpg" },
            { "name": "Lars-Ole Schliefkowitz", "job": "Electronic", "email": "", "image": "assets/images/team/2018/lars-ole-schliefkowitz.jpg" },
            { "name": "Alexander Hermann", "job": "Plan", "email": "", "image": "assets/images/team/2018/alexander-hermann.jpg" },
            { "name": "Sören Erichsen", "job": "Vision", "email": "", "image": "assets/images/team/2018/soeren-erichsen.jpg" },
            { "name": "Julian Lobisch", "job": "Car Model", "email": "", "image": "assets/images/team/2018/julian-lobisch.jpg" },
            { "name": "Meihen Kohsar", "job": "Software", "email": "", "image": "assets/images/team/2018/meihen-kohsar.jpg" },
            { "name": "Terry Mack", "job": "Vision", "email": "", "image": "assets/images/team/2018/dummy.jpg" },
            { "name": "Thomas Pohl", "job": "Software", "email": "", "image": "assets/images/team/2018/thomas-pohl.jpg" },
            { "name": "Timo Kortbrae", "job": "Head of Software", "email": "", "image": "assets/images/team/2018/timo-kortbrae.jpg" },
            { "name": "Robert Oehlmann", "job": "Head of Software", "email": "", "image": "assets/images/team/2018/robert-oehlmann.jpg" },
            ]
        },

  ],
  
   "egn17": [
    {
      "name": "Core Team",
      "members": [
        {
          "name": "Jacqueline Bartsch",
          "job": "Team Captain",
          "email": "",
          "image": "assets/images/team/2017/jacqueline-bartsch.jpg",
        },
        {
          "name": "Nilas Junge",
          "job": "Head of Technique",
          "email": "",
          "image": "assets/images/team/2017/nilas-junge.jpg",
        },
        {
          "name": "Chris Jensen",
          "job": "Head of Finance",
          "email": "",
          "image": "assets/images/team/2017/chris-jensen.jpg",
        },
        {
          "name": "Felix Lorenz",
          "job": "Head of Marketing",
          "email": "",
          "image": "assets/images/team/2017/felix-lorenz.jpg",
        },
        {
          "name": "Anke Kastner",
          "job": "Head of Technique",
          "email": "",
          "image": "assets/images/team/2017/anke-kastner.jpg",
        },
        {
          "name": "Lennart Alff",
          "job": "Head of Electronics",
          "email": "",
          "image": "assets/images/team/2017/lennart.alff.jpg",
        },
        {
          "name": "Floyd Bischop",
          "job": "Head of Aerodynamics",
          "email": "",
          "image": "assets/images/team/2017/floyd-bischop.jpg",
        },
        {
          "name": "Juri Piwkowski",
          "job": "Head of Suspension",
          "email": "",
          "image": "assets/images/team/2017/juri-piwkowski.jpg",
        },
        {
          "name": "Pascal Koch",
          "job": "Head of LV",
          "email": "",
          "image": "assets/images/team/2017/pascal-koch.jpg",
        },
        {
          "name": "Marvin Sieverding",
          "job": "Head of Software",
          "email": "",
          "image": "assets/images/team/2017/marvin-sieverding.jpg",
        },
        
      ]
    },
    {
      "name": "Finance",
      "members": [
        { "name": "Chris Jensen", "job": "Head of Finance", "email": "", "image": "assets/images/team/2017/chris-jensen.jpg" }
      ]
    },
    {
      "name": "Marketing",
      "members": [
        { "name": "Felix Lorenz", "job": "Head of Marketing", "email": "", "image": "assets/images/team/2017/felix-lorenz.jpg"},
        { "name": "Carl Johann Giest", "job": "Organization and Driver Responsible", "email": "", "image": "assets/images/team/2017/carl-giest.jpg" },
        { "name": "Hailan Wang", "job": "Sponsoring and Marketing", "email": "", "image": "assets/images/team/2017/hailan-wang.jpg" },
        { "name": "Markus Gillner", "job": "Organization", "email": "", "image": "assets/images/team/2017/markus-gillner.jpg" },
        { "name": "Sebastian Griep", "job": "Rendering and PR", "email": "", "image": "assets/images/team/2017/sebastiaan-griep.jpg" },
        { "name": "Geithy Sepp", "job": "Sponsoring and Marketing", "email": "", "image": "assets/images/team/2017/geithy-sepp.jpg" },
        { "name": "Andres Lück", "job": "Sponsoring and Marketing", "email": "", "image": "assets/images/team/2017/andres-lueck.jpg" },
        ]
    },
        {
          "name": "Suspension",
          "members": [
            { "name": "Juri Piwkowski", "job": "Head of Suspension", "email": "", "image": "assets/images/team/2017/juri-piwkowski.jpg" },
            { "name": "Alexander Hermann", "job": "Gear", "email": "", "image": "assets/images/team/2017/alexander-hermann.jpg" },
            { "name": "Devon Oehms", "job": "Spring-Damper-System", "email": "", "image": "assets/images/team/2017/devon-oehms.jpg" },
            { "name": "Dirk Rittau", "job": "Steering", "email": "", "image": "assets/images/team/2017/dirk-rittau.jpg" },
            { "name": "Dominic Hinz", "job": "Gear", "email": "", "image": "assets/images/team/2017/dominic-hinz.jpg" },
            { "name": "Hasan Costan", "job": "Brake System", "email": "", "image": "assets/images/team/2017/hasan-costan.jpg" },
            { "name": "Jonas Kalinka", "job": "Pedal Box", "email": "", "image": "assets/images/team/2017/jonas-kalinka.jpg" },
            { "name": "Ole Lippke", "job": "Wheel Suspension", "email": "", "image": "assets/images/team/2017/ole-lippke.jpg" },
            { "name": "Reinhold Metrich", "job": "Wheel Carrier / Hub", "email": "", "image": "assets/images/team/2017/reinhold-metrich.jpg" },
            { "name": "Timur Bekman", "job": "Kinematics", "email": "", "image": "assets/images/team/2017/timur-bekman.jpg" },
          ]
        },
        {
          "name": "Chassis",
          "members": [
            { "name": "Ayan Ullah Khan", "job": "SES", "email": "", "image": "assets/images/team/2017/ayan-ullah-khan.jpg" },
            { "name": "Galin Gichev", "job": "Simulation MQ", "email": "", "image": "assets/images/team/2017/placeholder.jpg" },
            { "name": "Jalal Ghazouani", "job": "Simulation", "email": "", "image": "assets/images/team/2017/jalal-ghazouani.jpg" },
            { "name": "Johannes Fölster", "job": "Crashbox", "email": "", "image": "assets/images/team/2017/johannes-foelster.jpg" },
            { "name": "Jonas Schmidt", "job": "Ergonomics", "email": "", "image": "assets/images/team/2017/jonas-schmidt.jpg" },
            { "name": "Jonas Schimmöller", "job": "Monocoque", "email": "", "image": "assets/images/team/2017/jonas-schimmoeller.jpg" },
            { "name": "Leonard Möller", "job": "Accumulator Container", "email": "", "image": "assets/images/team/2017/leonard-moeller.jpg" },
            { "name": "Lucas Hammer", "job": "Simulation", "email": "", "image": "assets/images/team/2017/lucas-hammer.jpg" },
            { "name": "Tobias Ansorg", "job": "Ergonomics", "email": "", "image": "assets/images/team/2017/tobias-ansorg.jpg" },
            { "name": "Tobias Tiedemann", "job": "Monocoque", "email": "", "image": "assets/images/team/2017/tobias-tiedemann.jpg" },
           ]
        },
        {
          "name": "Aerodynamics",
          "members": [
            { "name": "Floyd Bischop", "job": "Head of Aerodynamics", "email": "", "image": "assets/images/team/2017/floyd-bischop.jpg" },
            { "name": "Hendrik Doß", "job": "Coverings", "email": "", "image": "assets/images/team/2017/hendrik-doss.jpg" },
            { "name": "Henrik Papist", "job": "Subsoil", "email": "", "image": "assets/images/team/2017/henrik-papist.jpg" },
            { "name": "Mert Aydin", "job": "Side Boxes", "email": "", "image": "assets/images/team/2017/mert-aydin.jpg" },
            { "name": "Sebastian Block", "job": "DRS", "email": "", "image": "assets/images/team/2017/sebastian-block.jpg" },
            { "name": "Stefan Riethausen", "job": "Front- and Rearwing", "email": "", "image": "assets/images/team/2017/stefan-riethausen.jpg" }, 
          ]
        },
        {
          "name": "Software",
          "members": [
            { "name": "Martin Sieverding", "job": "Head of Software", "email": "", "image": "assets/images/team/2017/marvin-sieverding.jpg" },
            { "name": "Pascal Koch", "job": "Software ACU", "email": "", "image": "assets/images/team/2017/pascal-koch.jpg" },
            { "name": "Björn Przybla", "job": "Inertial Navigation", "email": "", "image": "assets/images/team/2017/bjoern-przybla.jpg" },
            { "name": "Christopher Sanjaya", "job": "Control Systems", "email": "", "image": "assets/images/team/2017/christopher-sanjaya.jpg" },
            { "name": "Felix Schermann", "job": "Display", "email": "", "image": "assets/images/team/2017/felix-schermann.jpg" },
            { "name": "Franziska Sommer", "job": "Inertial Navigation", "email": "", "image": "assets/images/team/2017/franziska-sommer.jpg" },
            { "name": "Gerrit Schöttler", "job": "Simulation", "email": "", "image": "assets/images/team/2017/placeholder.jpg" },
            { "name": "Maxim Yastremsky", "job": "Inertial Navigation", "email": "", "image": "assets/images/team/2017/maxim-yastremsky.jpg" },
            { "name": "Miguel Wesselmann", "job": "Control Systems", "email": "", "image": "assets/images/team/2017/miguel-wesselman.jpg" },
            { "name": "Natalie Niklas", "job": "ACU", "email": "", "image": "assets/images/team/2017/natalie-niklas.jpg" },
            { "name": "Timo Kortbrae", "job": "Board Computer", "email": "", "image": "assets/images/team/2017/timo-kortbrae.jpg" },
            { "name": "Andy Au", "job": "Sensor Board", "email": "", "image": "assets/images/team/2017/andy-au.jpg" },
            ]
        },
        {
          "name": "Electronics",
          "members": [
            { "name": "Lennart Alff", "job": "Head of Electronics", "email": "", "image": "assets/images/team/2017/lennart-alff.jpg" },
            { "name": "Pascal Koch", "job": "Head of LV", "email": "", "image": "assets/images/team/2017/pascal-koch.jpg" },
            { "name": "Alexander Grade", "job": "BMS", "email": "", "image": "assets/images/team/2017/alexander-grade.jpg" },
            { "name": "Andy Au", "job": "Sensor Board", "email": "", "image": "assets/images/team/2017/andy-au.jpg" },
            { "name": "Fynn Schröder", "job": "Cooling Systems", "email": "", "image": "assets/images/team/2017/fynn-schroeder.jpg" },
            { "name": "Helge Grossert", "job": "Cable Harness", "email": "", "image": "assets/images/team/2017/helge-grossert.jpg" },
            { "name": "Jonas Hannig", "job": "BMS", "email": "", "image": "assets/images/team/2017/jonas-hannig.jpg" },
            { "name": "Lucas Reethen", "job": "Housings", "email": "", "image": "assets/images/team/2017/lucas-reethen.jpg" },
            { "name": "Maximilian Künne", "job": "HV Components", "email": "", "image": "assets/images/team/2017/maximilian-kuenne.jpg" },
            { "name": "Maximilian Klemstein", "job": "Accumulator Container", "email": "", "image": "assets/images/team/2017/placeholder.jpg" },
            { "name": "Rene Voigt", "job": "ACU", "email": "", "image": "assets/images/team/2017/rene-voigt.jpg" },
            { "name": "Valentin Resapow", "job": "Accumulator", "email": "", "image": "assets/images/team/2017/valentin-resapow.jpg" },
            ]
        },
      {
          "name": "Driverless",
          "members": [
            { "name": "Nils Albrecht", "job": "Head of Driverless", "email": "", "image": "assets/images/team/2017/nils-albrecht.jpg" },
            { "name": "Lucas Hardt", "job": "Sponsoring", "email": "", "image": "assets/images/team/2017/placeholder.jpg" },
            { "name": "Robert Oehlmann", "job": "Software Planning", "email": "", "image": "assets/images/team/2017/placeholder.jpg" },
            { "name": "Felix Jahn", "job": "Software Controls", "email": "", "image": "assets/images/team/2017/felix-jahn.jpg" },
            { "name": "Daniel Auge", "job": "Software Vision", "email": "", "image": "assets/images/team/2017/daniel-auge.jpg" },
            { "name": "Etienne Müller", "job": "Software Actuators", "email": "", "image": "assets/images/team/2017/etienne-mueller.jpg" },
            { "name": "Moritz Hemmann", "job": "Hardware and Sensor Mounting", "email": "", "image": "assets/images/team/2017/moritz-hemmann.jpg" },
            ]
        },

  ],
  
  
   "egn16": [
    {
      "name": "Core Team",
      "members": [
        {
          "name": "Carl Johann Giest",
          "job": "Team Captain",
          "email": "",
          "image": "assets/images/team/2016/carl-giest.jpg",
        },
        {
          "name": "Felix Jahn",
          "job": "Head of Technology",
          "email": "",
          "image": "assets/images/team/2016/felix-jahn.jpg",
        },
        {
          "name": "Jacqueline Bartsch",
          "job": "Head of Finance",
          "email": "",
          "image": "assets/images/team/2016/jacqueline-bartsch.jpg",
        },
        {
          "name": "Marvin Sieverding",
          "job": "Head of Software",
          "email": "",
          "image": "assets/images/team/2016/marvin-sieverding.jpg",
        },
        {
          "name": "Lukas Hardt",
          "job": "Head of Sponsoring",
          "email": "",
          "image": "assets/images/team/2016/lukas-hardt.jpg",
        },
        {
          "name": "Jonas Kalinka",
          "job": "Head of Electronics",
          "email": "",
          "image": "assets/images/team/2016/jonas-kalinka.jpg",
        },
        {
          "name": "Max Stehn",
          "job": "Head of Suspension",
          "email": "",
          "image": "assets/images/team/2016/max-stehn.jpg",
        },
        {
          "name": "Nilas Junge",
          "job": "Head of Chassis",
          "email": "",
          "image": "assets/images/team/2016/nilas-junge.jpg",
        },
        {
          "name": "Daniel Auge",
          "job": "Head of Simulation",
          "email": "",
          "image": "assets/images/team/2016/daniel-auge.jpg",
        },
        {
          "name": "Anke Kastner",
          "job": "Head of Scrutineering",
          "email": "",
          "image": "assets/images/team/2016/anke-kastner.jpg",
        },
          {
          "name": "Lennart Alff",
          "job": "Head of Scrutineering",
          "email": "",
          "image": "assets/images/team/2016/lennart-alff.jpg",
        },  {
          "name": "Juri Piwkowski",
          "job": "Head of Workshop",
          "email": "",
          "image": "assets/images/team/2016/juri-piwkowski.jpg",
        },
        
      ]
    },
    {
      "name": "Finance",
      "members": [
        { "name": "Carl Johann Giest", "job": "Head of Finance", "email": "", "image": "assets/images/team/2016/carl-giest.jpg" }
      ]
    },
    {
      "name": "Marketing",
      "members": [
        { "name": "Jacqueline Bartsch", "job": "Head of Marketing", "email": "", "image": "assets/images/team/2016/jacqueline-bartsch.jpg"},
        { "name": "Lukas Hardt", "job": "Head of Sponsoring", "email": "", "image": "assets/images/team/2016/lukas-hardt.jpg" },
        { "name": "Devon Oehms", "job": "Sponsoring", "email": "", "image": "assets/images/team/2016/devon-oehms.jpg" },
        { "name": "Erik Willmann", "job": "Sponsoring", "email": "", "image": "assets/images/team/2016/erik-willmann.jpg" },
        { "name": "Maximilian Slesina", "job": "PR", "email": "", "image": "assets/images/team/2016/maximilian-slesina.jpg" },
        { "name": "Florian Brach", "job": "Film and Photos", "email": "", "image": "assets/images/team/2016/florian-brach.jpg" },
        { "name": "Floyd Bischop", "job": "Support", "email": "", "image": "assets/images/team/2016/floyd-bischop.jpg" },
        { "name": "Dayan Spiegeler", "job": "Support", "email": "", "image": "assets/images/team/2016/dayan-spiegeler.jpg" },  
        { "name": "Daniel Auge", "job": "Businessplan", "email": "", "image": "assets/images/team/2016/daniel-auge.jpg" },
        { "name": "Etienne Müller", "job": "Businessplan", "email": "", "image": "assets/images/team/2016/etienne-mueller.jpg" },
      ]
    },
        {
          "name": "Suspension",
          "members": [
            { "name": "Max Stehn", "job": "Head of Suspension", "email": "", "image": "assets/images/team/2016/max-stehn.jpg" },
            { "name": "Helge Grossert", "job": "Tire Model and Kinematics", "email": "", "image": "assets/images/team/2016/helge-grossert.jpg" },
            { "name": "Juri Piwkowski", "job": "Wheel Carrier and Hub", "email": "", "image": "assets/images/team/2016/juri-piwkowski.jpg" },
            { "name": "Markus Gillner", "job": "Pedals and Brakes", "email": "", "image": "assets/images/team/2016/markus-gillner.jpg" },
            { "name": "Felix Lorenz", "job": "Pedals and Brakes", "email": "", "image": "assets/images/team/2016/felix-lorenz.jpg" },
            { "name": "Loic Fernau", "job": "Wheel Suspension", "email": "", "image": "assets/images/team/2016/loic-fernau.jpg" },
            { "name": "Anke Kastner", "job": "Steering", "email": "", "image": "assets/images/team/2016/anke-kastner.jpg" },
            { "name": "Sven Wehrend", "job": "Spring-Damper-System", "email": "", "image": "assets/images/team/2016/sven-wehrend.jpg" },
            { "name": "Dominic Hinz", "job": "Drive Shaft and Gear Calculation", "email": "", "image": "assets/images/team/2016/dominic-hinz.jpg" },
            { "name": "Jonathan Scott Evenson", "job": "Cooling", "email": "", "image": "assets/images/team/2016/jonathan-evenson.jpg" },
            { "name": "Ching Nok Au", "job": "Transmission Housing and Motor", "email": "", "image": "assets/images/team/2016/ching-nok-au.jpg" },
          ]
        },
        {
          "name": "Chassis",
          "members": [
            { "name": "Nilas Junge", "job": "Head of Chassis", "email": "", "image": "assets/images/team/2016/nilas-junge.jpg" },
            { "name": "Galin Gichev", "job": "Simulation MQ", "email": "", "image": "assets/images/team/2016/galin-gichev.jpg" },
            { "name": "Thimo Bielsky", "job": "SES", "email": "", "image": "assets/images/team/2016/thimo-bielsky.jpg" },
            { "name": "Benjamin Boll", "job": "Mould Production", "email": "", "image": "assets/images/team/2016/benjamin-boll.jpg" },
            { "name": "Alexander Hermann", "job": "Accumulator Box", "email": "", "image": "assets/images/team/2016/alexander-hermann.jpg" },
            { "name": "Carsten Cosse", "job": "Wings", "email": "", "image": "assets/images/team/2016/carsten-cosse.jpg" },
            { "name": "Aljoscha Repczuk", "job": "Wing Mount", "email": "", "image": "assets/images/team/2016/aljoscha-repczuk.jpg" },
            { "name": "Sebastian Roth", "job": "Diffusor and Side Pods", "email": "", "image": "assets/images/team/2016/sebastian-roth.jpg" },
            { "name": "Timo Eckert", "job": "Ergonomics", "email": "", "image": "assets/images/team/2016/timo-eckert.jpg" },
            { "name": "Jörn Krüger", "job": "Support", "email": "", "image": "assets/images/team/2016/joern-krueger.jpg" },
            { "name": "Tobias Tiedemann", "job": "Support", "email": "", "image": "assets/images/team/2016/tobias-tiedemann.jpg" },
            { "name": "Moritz Hemmann", "job": "Support", "email": "", "image": "assets/images/team/2016/moritz-hemmann.jpg" },
           ]
        },
        {
          "name": "Simulation",
          "members": [
            { "name": "Daniel Auge", "job": "Head of Simulation", "email": "", "image": "assets/images/team/2016/daniel-auge.jpg" },
            { "name": "Christopher Sanjaya", "job": "Controller Design", "email": "", "image": "assets/images/team/2016/christopher-sanjaya.jpg" },
            { "name": "Miguel Wesselmann", "job": "Controller Design", "email": "", "image": "assets/images/team/2016/miguel-wesselmann.jpg" },
            { "name": "Nithin Athreya", "job": "Modeling", "email": "", "image": "assets/images/team/2016/nithin-athreya.jpg" },
            { "name": "Madhu Mahadevappa", "job": "Virtual Formula, VI grade", "email": "", "image": "assets/images/team/2016/madhu-mahadevappa.jpg" },
            { "name": "Himanshu Hdoshi", "job": "Virtual Formula, VI grade", "email": "", "image": "assets/images/team/2016/himanshu-hdoshi.jpg" }, 
          ]
        },
       
        {
          "name": "Electronics",
          "members": [
            { "name": "Jonas Kalinka", "job": "Head of Electronics", "email": "", "image": "assets/images/team/2016/jonas-kalinka.jpg" },
            { "name": "Rene Voigt", "job": "Accumulator", "email": "", "image": "assets/images/team/2016/rene-voigt.jpg" },
            { "name": "Martin Schlodinski", "job": "Board Computer", "email": "", "image": "assets/images/team/2016/martin-schlodinski.jpg" },
            { "name": "Lennart Alff", "job": "Wiring Harness and Sensors", "email": "", "image": "assets/images/team/2016/lennart-alff.jpg" },
            { "name": "Jonas Koch am Brink", "job": "Housings TSAL, Breaking Light", "email": "", "image": "assets/images/team/2016/jonas-kockambrink.jpg" },
            { "name": "Dayan Spiegeler", "job": "Display and Cockpit Interface", "email": "", "image": "assets/images/team/2016/dayan-spiegeler.jpg" },
            { "name": "Nils Albrecht", "job": "DDC and Motorcontroller", "email": "", "image": "assets/images/team/2016/nils-albrecht.jpg" },
            { "name": "Jonas Hannig", "job": "BMS and Board Camera", "email": "", "image": "assets/images/team/2016/jonas-hannig.jpg" },
            { "name": "Pascal Koch", "job": "ACU Software, Sensors", "email": "", "image": "assets/images/team/2016/pascal-koch.jpg" },
            { "name": "Marvin Sieverding", "job": "Boardcomputer Software", "email": "", "image": "assets/images/team/2016/marvin-sieverding.jpg" },
            { "name": "Timo Kortbrae", "job": "Boardcomputer", "email": "", "image": "assets/images/team/2016/timo-kortbrae.jpg" },
            { "name": "Maximilian Klemstein", "job": "Motorcontroller Housing", "email": "", "image": "assets/images/team/2016/maximilian-klemstein.jpg" },
            { "name": "Maximilian Künne", "job": "Sensorboard, Ethernet Switch, Xbee", "email": "", "image": "assets/images/team/2016/maximilian-kuenne.jpg" },
            { "name": "Timur Bekman", "job": "Accumulator Box", "email": "", "image": "assets/images/team/2016/timur-bekman.jpg" },
            { "name": "Natalie Niklas", "job": "Support", "email": "", "image": "assets/images/team/2016/natalie-niklas.jpg" },
            { "name": "Maxim Yastremsky", "job": "App", "email": "", "image": "assets/images/team/2016/maxim-yastremsky.jpg" },
            { "name": "Mathias Laser", "job": "Support", "email": "", "image": "assets/images/team/2016/mathias-laser.jpg" },
            { "name": "Catrin Compart", "job": "Support", "email": "", "image": "assets/images/team/2016/catrin-compart.jpg" },
            ]
        },
     

  ],
  
   "egn15": [
    {
      "name": "Board",
      "members": [
        {
          "name": "Maximilian Slesina",
          "job": "Teamleader",
          "email": "",
          "image": "assets/images/team/2015/maximilian-slesina.jpg",
        },
        {
          "name": "Catrin Compart",
          "job": "Head of Technology",
          "email": "",
          "image": "assets/images/team/2015/catrin-compart.jpg",
        },
        {
          "name": "Johanna Fenselau",
          "job": "Head of Finance",
          "email": "",
          "image": "assets/images/team/2015/johanna-fenselau.jpg",
        },
        {
          "name": "Diana Liedtke",
          "job": "Head of Marketing",
          "email": "",
          "image": "assets/images/team/2015/diana-liedtke.jpg",
        },
        {
          "name": "Lisa Reichert",
          "job": "Board Observer",
          "email": "",
          "image": "assets/images/team/2015/lisa-reichert.jpg",
        },
        
      ]
    },
    {
      "name": "Finance",
      "members": [
        { "name": "Johanna Fenselau", "job": "Head of Finance", "email": "", "image": "assets/images/team/2015/johanna-fenselau.jpg" }
      ]
    },
    {
      "name": "Marketing",
      "members": [
        { "name": "Diana Liedtke", "job": "Head of Marketing", "email": "", "image": "assets/images/team/2015/diana-liedtke.jpg"},
        { "name": "Lukas Hardt", "job": "Sponsoring", "email": "", "image": "assets/images/team/2015/lukas-hardt.jpg" },
        { "name": "Carl Johann Giest", "job": "Sponsoring", "email": "", "image": "assets/images/team/2015/carl-giest.jpg" },
        { "name": "Felix Jahn", "job": "PR, Website Design", "email": "", "image": "assets/images/team/2015/felix-jahn.jpg" },
        { "name": "Jacqueline Bartsch", "job": "Organization and Data Management", "email": "", "image": "assets/images/team/2015/jacqueline-bartsch.jpg" },
        { "name": "Etienne Müller", "job": "Businessplan", "email": "", "image": "assets/images/team/2015/dummy-man.jpg" },
      ]
    },
        {
          "name": "Engineering",
          "members": [
            { "name": "Maximilian Slesina", "job": "Teamleader Mechanics", "email": "", "image": "assets/images/team/2015/maximilian-slesina.jpg" },
            { "name": "Catrin Compart", "job": "Teamleader Electronics", "email": "", "image": "assets/images/team/2015/catrin-compart.jpg" },
            { "name": "Marco Hinrichs", "job": "Head of Mechanics, Inventor Help", "email": "", "image": "assets/images/team/2015/marco-hinrichs.jpg" },
            { "name": "Jan-Philipp Kreienborg", "job": "Testing and Drivers", "email": "", "image": "assets/images/team/2015/jan-philipp-kreienborg.jpg" },
            ]
        },
        {
          "name": "Suspension",
          "members": [
            { "name": "Vignesh Venkatesan", "job": "Head of Suspension", "email": "", "image": "assets/images/team/2015/vignesh-venkatesan.jpg" },
            { "name": "Sören Thaele", "job": "Pedals and Brakes", "email": "", "image": "assets/images/team/2015/soeren-thaele.jpg" },
            { "name": "Vivian Kriewall", "job": "Pedals and Brakes", "email": "", "image": "assets/images/team/2015/vivian-kriewall.jpg" },
            { "name": "René Giest", "job": "Steering", "email": "", "image": "assets/images/team/2015/rene-giest.jpg" },
            { "name": "Jonathan Jobmann", "job": "Tire Model and Kinematics", "email": "", "image": "assets/images/team/2015/jonathan-jobmann.jpg" },
            { "name": "Alexander Szpotowicz", "job": "Tire Model and Kinematics", "email": "", "image": "assets/images/team/2015/alexander-szpotowicz.jpg" },
            { "name": "Hendrik Beecken", "job": "Wheel Carrier", "email": "", "image": "assets/images/team/2015/dummy-man.jpg" },
            { "name": "Jonas Lühr", "job": "A-Arms", "email": "", "image": "assets/images/team/2015/jonas-luehr.jpg" },
            { "name": "Karsten Miesner", "job": "Rims", "email": "", "image": "assets/images/team/2015/karsten-miesner.jpg" },
            { "name": "Nils Deppe", "job": "Spring Damper System", "email": "", "image": "assets/images/team/2015/dummy-man.jpg" },
            { "name": "Max Stehn", "job": "Spring Damper System", "email": "", "image": "assets/images/team/2015/max-stehn.jpg" },
           ]
        },
        {
          "name": "Power Train",
          "members": [
            { "name": "Carsten Cosse", "job": "Head of Powertrain", "email": "", "image": "assets/images/team/2015/carsten-cosse.jpg" },
            { "name": "Daniel Greve", "job": "Transmission and Motor", "email": "", "image": "assets/images/team/2015/daniel-greve.jpg" },
            { "name": "Jörn Krüger", "job": "Drive Shaft and Gear Calculation", "email": "", "image": "assets/images/team/2015/joern-krueger.jpg" },
          ]
        },
       
        {
          "name": "Chassis",
          "members": [
            { "name": "Benjamin Boll", "job": "Head of Chassis", "email": "", "image": "assets/images/team/2015/benjamin-boll.jpg" },
            { "name": "Moritz Hemmann", "job": "Ergonomics", "email": "", "image": "assets/images/team/2015/moritz-hemmann.jpg" },
            { "name": "Henrik Werner", "job": "Simulation", "email": "", "image": "assets/images/team/2015/henrik-werner.jpg" },
            { "name": "Nilas Junge", "job": "Wing Mount and Crashbox", "email": "", "image": "assets/images/team/2015/nilas-junge.jpg" },
            { "name": "Lucas Hammer", "job": "Support", "email": "", "image": "assets/images/team/2015/lucas-hammer.jpg" },
            { "name": "Lisa Reichert", "job": "Wing Simulation", "email": "", "image": "assets/images/team/2015/lisa-reichert.jpg" },
            { "name": "Timo Eckert", "job": "Diffusor", "email": "", "image": "assets/images/team/2015/timo-eckert.jpg" },
            { "name": "Jelle Juhl", "job": "Side Pods", "email": "", "image": "assets/images/team/2015/dummy-man.jpg" },
            ]
        },
       {
          "name": "High Voltage",
          "members": [
            { "name": "Mathias Laser", "job": "Head of HV", "email": "", "image": "assets/images/team/2015/mathias-laser.jpg" },
            { "name": "Thimo Bielsky", "job": "HV Mechanic and Electronic", "email": "", "image": "assets/images/team/2015/thimo-bielsky.jpg" },
            { "name": "Florian Brach", "job": "HV Mechanic and Electronic", "email": "", "image": "assets/images/team/2015/florian-brach.jpg" },
            { "name": "Jose Luis Zamora", "job": "Motorcontroller", "email": "", "image": "assets/images/team/2015/dummy-man.jpg" },
            { "name": "Manuel Echeverri Márquez", "job": "Motorcontroller", "email": "", "image": "assets/images/team/2015/dummy-man.jpg" },
            { "name": "Hauke Becker", "job": "Support", "email": "", "image": "assets/images/team/2015/hauke-becker.jpg" },
            ]
        },
      {
          "name": "Low Voltage",
          "members": [
            { "name": "Rene Voigt", "job": "Head of LV, Cockpit Interface", "email": "", "image": "assets/images/team/2015/rene-voigt.jpg" },
            { "name": "Martin Schlodinski", "job": "Boardcomputer and Sensors", "email": "", "image": "assets/images/team/2015/martin-schlodinski.jpg" },
            { "name": "Jonas Kalinka", "job": "Sensors and Wiring Harness", "email": "", "image": "assets/images/team/2015/jonas-kalinka.jpg" },
            { "name": "Jonas Hannig", "job": "BMS", "email": "", "image": "assets/images/team/2015/jonas-hannig.jpg" },
            { "name": "Jannick Brockmann", "job": "Support", "email": "", "image": "assets/images/team/2015/dummy-man.jpg" },
            { "name": "Mark Tappe", "job": "Support", "email": "", "image": "assets/images/team/2015/mark-tappe.jpg" },
            ]
        },
     {
          "name": "Software",
          "members": [
            { "name": "Pascal Koch", "job": "Head of Software", "email": "", "image": "assets/images/team/2015/pascal-koch.jpg" },
            { "name": "Marvin Sieverding", "job": "Programming Mainboards", "email": "", "image": "assets/images/team/2015/marvin-sieverding.jpg" },
            { "name": "Jonas Farnbacher", "job": "Drivedynamic Control", "email": "", "image": "assets/images/team/2015/jonas-farnbacher.jpg" },
            { "name": "Sascha Lehmann", "job": "Drivedynamic Control", "email": "", "image": "assets/images/team/2015/sascha-lehmaann.jpg" },
            { "name": "Daniel Auge", "job": "Telemetry", "email": "", "image": "assets/images/team/2015/daniel-auge.jpg" },
            ]
        },
     

  ],
  
  
   "egn14": [
    {
      "name": "Board",
      "members": [
        {
          "name": "Felix Kexel",
          "job": "Head of Marketing",
          "email": "",
          "image": "assets/images/team/2014/felix-kexel.jpg",
        },
        {
          "name": "Daniel Auge",
          "job": "Head of Electronics",
          "email": "",
          "image": "assets/images/team/2014/daniel-auge.jpg",
        },
        {
          "name": "Hendrik Werner",
          "job": "Head of Mechanics",
          "email": "",
          "image": "assets/images/team/2014/hendrik-werner.jpg",
        },
        {
          "name": "Jan Philipp Bittner",
          "job": "Head of Finances",
          "email": "",
          "image": "assets/images/team/2014/jan-philipp.jpg",
        },
        {
          "name": "Etienne Müller",
          "job": "Teamleader and Organisation",
          "email": "",
          "image": "assets/images/team/2014/etienne-mueller.jpg",
        },
        
      ]
    },
    {
      "name": "Finance",
      "members": [
        { "name": "Jan Philipp Bittner", "job": "Head of Finance", "email": "", "image": "assets/images/team/2014/jan-philipp.jpg" },
        { "name": "Johanna Fenselau", "job": "Cost Report and Accounting", "email": "", "image": "assets/images/team/2014/johanna-fenselau.jpg" },
        { "name": "Alexander Schröder", "job": "Support", "email": "", "image": "assets/images/team/2014/alexander-schroeder.jpg" },
      ]
    },
    {
      "name": "Organization",
      "members": [
        { "name": "Etienne Müller", "job": "Teamleader and Organization", "email": "", "image": "assets/images/team/2014/etienne-mueller.jpg"},
        { "name": "Diana Liedtke", "job": "Support", "email": "", "image": "assets/images/team/2014/diana-liedtke.jpg" },
        { "name": "Nils Deppe", "job": "Support", "email": "", "image": "assets/images/team/2014/nils-deppe.jpg" },
        { "name": "Jonas Lühr", "job": "Support", "email": "", "image": "assets/images/team/2014/jonas-luehr.jpg" },
        ]
    },
        {
          "name": "Marketing",
          "members": [
            { "name": "Felix Krexel", "job": "Head of Marketing", "email": "", "image": "assets/images/team/2014/felix-krexel.jpg" },
            { "name": "Catrin Compart", "job": "E-Sponsoring", "email": "", "image": "assets/images/team/2014/catrin-compart.jpg" },
            { "name": "Julius Lutzer", "job": "Support", "email": "", "image": "assets/images/team/2014/julius-lutzer.jpg" },
            { "name": "Maximilian Templer", "job": "PR Support", "email": "", "image": "assets/images/team/2014/maximilian-templer.jpg" },
            { "name": "Jannick Brockmann", "job": "PR", "email": "", "image": "assets/images/team/2014/dummy-man.jpg" },
            { "name": "Tim Pronten", "job": "Sponsoring", "email": "", "image": "assets/images/team/2014/tim-pronten.jpg" },
            { "name": "Daniel Schreiber", "job": "Support", "email": "", "image": "assets/images/team/2014/daniel-schreiber.jpg" },
            { "name": "Hauke Becker", "job": "PR Support", "email": "", "image": "assets/images/team/2014/hauke-becker.jpg" },
            { "name": "Benjamin Boll", "job": "Support", "email": "", "image": "assets/images/team/2014/benjamin-boll.jpg" },
            ]
        },
        {
          "name": "Engineering",
          "members": [
            { "name": "Henrik Werner", "job": "Head of Mechanics", "email": "", "image": "assets/images/team/2014/henrik-werner.jpg" },
            { "name": "Daniel Auge", "job": "Head of Electronics", "email": "", "image": "assets/images/team/2014/daniel-auge.jpg" },
            { "name": "Marco Hinrichs", "job": "Vault Servcer, Inventor Help, Controller Housing", "email": "", "image": "assets/images/team/2014/marco-hinrichs.jpg" },
           ]
        },
        {
          "name": "Suspension",
          "members": [
            { "name": "Sven Kloock", "job": "Head of Suspension", "email": "", "image": "assets/images/team/2014/sven-kloock.jpg" },
            { "name": "Alexander Szpotowicz", "job": "A-Arms", "email": "", "image": "assets/images/team/2014/alexander-szpotowicz.jpg" },
            { "name": "Christoph Horn", "job": "Kinematics", "email": "", "image": "assets/images/team/2014/dummy-man.jpg" },
            { "name": "Jonathan Jobmann", "job": "Hub and Tripod", "email": "", "image": "assets/images/team/2014/jonathan-jobmann.jpg" },
            { "name": "Hendrik Beecken", "job": "Wheel Carrier", "email": "", "image": "assets/images/team/2014/hendrik-beecken.jpg" },
            { "name": "Timo Wülbern", "job": "Rims and Tires, SDS", "email": "", "image": "assets/images/team/2014/timo-wuelbern.jpg" },
            { "name": "Vignesh Venkatesan", "job": "Spring-Damper and Stabilizier", "email": "", "image": "assets/images/team/2014/vignesh-venkatesan.jpg" },
            { "name": "Max Stehn", "job": "Steering", "email": "", "image": "assets/images/team/2014/max-stehn.jpg" },
            { "name": "Karsten Wandtke", "job": "Frame", "email": "", "image": "assets/images/team/2014/karsten-wandtke.jpg" },
            { "name": "Maxim Jaffé", "job": "Brakes", "email": "", "image": "assets/images/team/2014/maxim-jaffe.jpg" },
          ]
        },
       
        {
          "name": "Powertrain",
          "members": [
            { "name": "Lisa Reichert", "job": "Head of Powertrain", "email": "", "image": "assets/images/team/2014/lisa-reichert.jpg" },
            { "name": "Fabian Neuschmidt", "job": "Drive Shaft", "email": "", "image": "assets/images/team/2014/fabian-neuschmidt.jpg" },
            { "name": "Jörn Krüger", "job": "Drive Shaft", "email": "", "image": "assets/images/team/2014/joern-krueger.jpg" },
            { "name": "Jonas Farnbacher", "job": "Controller and Motor", "email": "", "image": "assets/images/team/2014/jonas-farnbacher.jpg" },
            { "name": "Carsten Cosse", "job": "Cooling System", "email": "", "image": "assets/images/team/2014/carsten-cosse.jpg" },
            { "name": "Felix Jahn", "job": "Transmission and Motor", "email": "", "image": "assets/images/team/2014/felix-jahn.jpg" },
            { "name": "Jelle Juhl", "job": "Transmission", "email": "", "image": "assets/images/team/2014/jelle-juhl.jpg" },
            ]
        },
       {
          "name": "Ergonomics",
          "members": [
            { "name": "Lukas Hardt", "job": "Head of Ergonomics", "email": "", "image": "assets/images/team/2014/lukas-hardt.jpg" },
            { "name": "Mark Tappe", "job": "Steering Wheel / Armature", "email": "", "image": "assets/images/team/2014/mark-tappe.jpg" },
            { "name": "Jan Mehnen", "job": "Pedals", "email": "", "image": "assets/images/team/2014/dummy-man.jpg" },
            { "name": "Ambika Sriramakrishna", "job": "Support", "email": "", "image": "assets/images/team/2014/ambika-sriramakrishna.jpg" },
            ]
        },
      {
          "name": "Aerodynamics",
          "members": [
            { "name": "Maximilian Slesina", "job": "Head of Aerodynamics", "email": "", "image": "assets/images/team/2014/maximilian-slesina.jpg" },
            { "name": "Christoph Bieler", "job": "Under Body and Diffusor", "email": "", "image": "assets/images/team/2014/christoph-bieler.jpg" },
            { "name": "Jonathan Wenk", "job": "Skin", "email": "", "image": "assets/images/team/2014/jonathan-wenk.jpg" },
            { "name": "Susanne Sellmeier", "job": "Skin", "email": "", "image": "assets/images/team/2014/susanne-sellmeier.jpg" },
            { "name": "Shalv Shah", "job": "Skin", "email": "", "image": "assets/images/team/2014/shalv-shah.jpg" },
            { "name": "Harshit Gandhi", "job": "Skin", "email": "", "image": "assets/images/team/2014/harshit-gandhi.jpg" },
            { "name": "Sameer Panchamukhi", "job": "Skin", "email": "", "image": "assets/images/team/2014/sameer-panchamukhi.jpg" },
            ]
        },
     {
          "name": "Electronics",
          "members": [
            { "name": "Daniel Auge", "job": "Head of Electronics", "email": "", "image": "assets/images/team/2014/daniel-auge.jpg" },
            { "name": "Martin Schlodinski", "job": "Head of LV", "email": "", "image": "assets/images/team/2014/martin-schlodinski.jpg" },
            { "name": "Jonas Hannig", "job": "LV", "email": "", "image": "assets/images/team/2014/jonas-hannig.jpg" },
            { "name": "Vikas Suyodhana", "job": "LV", "email": "", "image": "assets/images/team/2014/vikas-suyodhana.jpg" },
            { "name": "Thomas Busch", "job": "Head of Software", "email": "", "image": "assets/images/team/2014/thomas-busch.jpg" },
            { "name": "Mathias Laser", "job": "Accumulator", "email": "", "image": "assets/images/team/2014/mathias-laser.jpg" },
            { "name": "Nasser Attar", "job": "Accumulator", "email": "", "image": "assets/images/team/2014/nasser-attar.jpg" },
            { "name": "Jonas Farnbacher", "job": "Powertrain and Engine Control", "email": "", "image": "assets/images/team/2014/jonas-farnbacher.jpg" },
            { "name": "Jonas Kalinka", "job": "Trainee", "email": "", "image": "assets/images/team/2014/jonas-kalinka.jpg" },
            ]
        },
     

  ],
  
  
   "egn13": [
    {
      "name": "Board",
      "members": [
        {
          "name": "Alexander Knittler",
          "job": "Teamleader",
          "email": "",
          "image": "assets/images/team/2013/alexander-knittler.JPG",
        },
        {
          "name": "Hauke Becker",
          "job": "Head of Technology",
          "email": "",
          "image": "assets/images/team/2013/hauke-becker.JPG",
        },
        {
          "name": "Nikolai Reinke",
          "job": "Head of Marketing",
          "email": "",
          "image": "assets/images/team/2013/nikolai-reinke.JPG",
        },
        {
          "name": "Maximilian Templer",
          "job": "Head of Finances",
          "email": "",
          "image": "assets/images/team/2013/maximilian-templer.JPG",
        },
        {
          "name": "Jan Mehnen",
          "job": "Head of Organization",
          "email": "",
          "image": "assets/images/team/2013/jan-mehnen.JPG",
        },
        
      ]
    },
    {
      "name": "Finance",
      "members": [
        { "name": "Maximilian Templer", "job": "Head of Finance", "email": "", "image": "assets/images/team/2013/maximilian-templer.JPG" },
        { "name": "Johanna Fenselau", "job": "Cost Report", "email": "", "image": "assets/images/team/2013/johanna-fenselau.JPG" },
      ]
    },
    {
      "name": "Organization",
      "members": [
        { "name": "Jan Mehnen", "job": "Head of Organization", "email": "", "image": "assets/images/team/2013/jan-mehnen.JPG"},
        { "name": "Pascal Philipp", "job": "Teamevents", "email": "", "image": "assets/images/team/2013/pascal-philipp.JPG" },
        ]
    },
        {
          "name": "Marketing",
          "members": [
            { "name": "Nikolai Reinke", "job": "Head of Marketing", "email": "", "image": "assets/images/team/2013/nikolai-reinke.JPG" },
            { "name": "Catrin Compart", "job": "Sponsoring", "email": "", "image": "assets/images/team/2013/carina-compart.JPG" },
            { "name": "Fabian Neuschmidt", "job": "Support", "email": "", "image": "assets/images/team/2013/fabian-neuschmidt.JPG" },
            { "name": "Bastian Kruse", "job": "Film and Photos", "email": "", "image": "assets/images/team/2013/placeholder.JPG" },
            { "name": "Philipp Kreutzer", "job": "Film and Photos", "email": "", "image": "assets/images/team/2013/placeholder.JPG" },
            ]
        },
        {
          "name": "Engineering",
          "members": [
            { "name": "Hauke Becker", "job": "Head of Technology", "email": "", "image": "assets/images/team/2013/hauke-becker.JPG" },
            { "name": "Philipp von Stürmer", "job": "Head of Mechanical Design", "email": "", "image": "assets/images/team/2013/philipp-von-stuermer.JPG" },
            { "name": "Lars Baetcke", "job": "Head of Production", "email": "", "image": "assets/images/team/2013/lars.baetcke.JPG" },
           ]
        },
        {
          "name": "Suspension",
          "members": [
            { "name": "Fabian Höderath", "job": "Head of Suspension", "email": "", "image": "assets/images/team/2013/fabian-hderath.JPG" },
            { "name": "Henrik Werner", "job": "dep. Head of Suspension and Steering", "email": "", "image": "assets/images/team/2013/henrik-werner.JPG" },
            { "name": "Sven Kloock", "job": "Steering", "email": "", "image": "assets/images/team/2013/sven-klock.JPG" },
            { "name": "Marco Hinrichs", "job": "Wheel Carrier and Hub", "email": "", "image": "assets/images/team/2013/marco-hinrichs.JPG" },
            { "name": "Lisa Reichert", "job": "Transmission and Motor", "email": "", "image": "assets/images/team/2013/lisa-reichert.JPG" },
            { "name": "Karsten Wandtke", "job": "Transmission and Motor", "email": "", "image": "assets/images/team/2013/karsten-wandtke.JPG" },
            { "name": "Jan Mehnen", "job": "Transmissionhousing", "email": "", "image": "assets/images/team/2013/jan-mehnen.JPG" },
            { "name": "Alexander Szpotowicz", "job": "A-Arms", "email": "", "image": "assets/images/team/2013/alexander-szpotowicz.JPG" },
            { "name": "Hans Holub", "job": "Pedals and Brakes", "email": "", "image": "assets/images/team/2013/hans-holub.JPG" },
            { "name": "Amine Boghanmi", "job": "Pedals and Brakes", "email": "", "image": "assets/images/team/2013/amine-boughanmi.JPG" },
            { "name": "Mirko Schütze", "job": "Pedals and Brakes", "email": "", "image": "assets/images/team/2013/mirko-schtze.JPG" },
            
          ]
        },
       
        {
          "name": "Body",
          "members": [
            { "name": "Petter Ploog", "job": "Head of Chassis and Frame", "email": "", "image": "assets/images/team/2013/petter-ploog.JPG" },
            { "name": "Sergej Harder", "job": "Crashbox", "email": "", "image": "assets/images/team/2013/sergej-harder.JPG" },
            { "name": "Etienne Müller", "job": "Aerodynamics", "email": "", "image": "assets/images/team/2013/etienne-mller.JPG" },
            { "name": "Christoph Bieler", "job": "Aerodynamics", "email": "", "image": "assets/images/team/2013/christoph-bieler.JPG" },
            { "name": "Ullrich Kurzidim", "job": "Aerodynamics Support", "email": "", "image": "assets/images/team/2013/placeholder.JPG" },
            ]
        },
       {
          "name": "Electronics",
          "members": [
                       { "name": "Axel Engelhard", "job": "Head of Electronics", "email": "", "image": "assets/images/team/2013/axel-engelhardt.JPG" },
           ]
        },
      {
          "name": "Low Voltage",
          "members": [
            { "name": "Michael Meissner", "job": "Head of LV", "email": "", "image": "assets/images/team/2013/michael-meissner.JPG" },
            { "name": "Konstantin Stepanow", "job": "Temperature Management", "email": "", "image": "assets/images/team/2013/konstantin-stepanow.JPG" },
            { "name": "Nils Minartz", "job": "Temperature Management", "email": "", "image": "assets/images/team/2013/nils-minartz.JPG" },
            { "name": "Ake Ewald", "job": "Sensor Board", "email": "", "image": "assets/images/team/2013/ake-ewald.JPG" },
            { "name": "Michel Berendes", "job": "Torque Vectoring", "email": "", "image": "assets/images/team/2013/michel-berendes.JPG" },
  
  
  
           ]
        },
      {
          "name": "High Voltage",
          "members": [
            { "name": "Max Bergmann", "job": "Head of HV", "email": "", "image": "assets/images/team/2013/max-bergmann.JPG" },
            { "name": "Christian Kascha", "job": "Accumulator", "email": "", "image": "assets/images/team/2013/christian-kascha.JPG" },
            { "name": "Sven Froese", "job": "Accumulator", "email": "", "image": "assets/images/team/2013/sven-froese.JPG" },
            { "name": "Tammo Wallisch", "job": "DC/DC", "email": "", "image": "assets/images/team/2013/tammo-wallisch.JPG" },
            ]
        },
     {
          "name": "Mechanical Components",
          "members": [
            { "name": "Mathias Laser", "job": "Head of Motor and Controller", "email": "", "image": "assets/images/team/2013/mathias-laser.JPG" },
            { "name": "Lukas Flocken", "job": "Motor and Controller", "email": "", "image": "assets/images/team/2013/lukas-flocken.JPG" },
            { "name": "Audrius Doblies", "job": "Cooling and Power Electronics", "email": "", "image": "assets/images/team/2013/audrius-doblies.JPG" },
            ]
        },
      {
          "name": "Software",
          "members": [
            { "name": "Martin Schlodinski", "job": "Head of Software", "email": "", "image": "assets/images/team/2013/martin-schlodinski.JPG" },
            { "name": "Pragathi Pinchi", "job": "Support", "email": "", "image": "assets/images/team/2013/pragathi-pinchi.JPG" },
            { "name": "Leif Rohwerder", "job": "Communications", "email": "", "image": "assets/images/team/2013/dummy-man.JPG" },
            ]
        },
     ],
  
   "egn12": [
    {
      "name": "Board",
      "members": [
        {
          "name": "Ake Ewald",
          "job": "Teamleader and Head of Organization",
          "email": "",
          "image": "assets/images/team/2012/ake-ewald.jpg",
        },
        {
          "name": "Felix Schoppa",
          "job": "Head of Technology",
          "email": "",
          "image": "assets/images/team/2012/felix-schoppa.jpg",
        },
        {
          "name": "Mauritz Möller",
          "job": "Head of Finances and Construction",
          "email": "",
          "image": "assets/images/team/2012/mauritz-mller.jpg",
        },
        {
          "name": "Hauke Becker",
          "job": "Head of Marketing and PR",
          "email": "",
          "image": "assets/images/team/2012/hauke-becker.jpg",
        },
       
        
      ]
    },
    {
      "name": "Finance",
      "members": [
        { "name": "Mauritz Möller", "job": "Head of Finance and Construction", "email": "", "image": "assets/images/team/2012/mauritz-mller.jpg" },
        { "name": "Maximilian Templer", "job": "dep. Head of Finances and Accounting", "email": "", "image": "assets/images/team/2012/maximilian-templer.jpg" },
        { "name": "Stefan Rump", "job": "Business Plan Presentation", "email": "", "image": "assets/images/team/2012/stefan-rump.jpg" },
      ]
    },
    {
      "name": "Marketing",
      "members": [
        { "name": "Hauke Becker", "job": "Head of Marketing and PR", "email": "", "image": "assets/images/team/2012/hauke-becker.jpg"},
        { "name": "Nikolai Reinke", "job": "Head of Sponsoring", "email": "", "image": "assets/images/team/2012/nikolai-reinke.jpg" },
        { "name": "Jan-Philipp Kreienborg", "job": "Sponsoring", "email": "", "image": "assets/images/team/2012/jan-philipp-kreienborg.jpg" },
        { "name": "Kai Lück", "job": "Sponsoring", "email": "", "image": "assets/images/team/2012/kai-lck.jpg" },
        { "name": "Linda Polzin", "job": "Support", "email": "", "image": "assets/images/team/2012/linda-polzin.jpg" },
        { "name": "Daniela Sanders", "job": "Support", "email": "", "image": "assets/images/team/2012/daniela-sanders.jpg" },
        ]
    },
     {
          "name": "Engineering",
          "members": [
            { "name": "Felix Schoppa", "job": "Head of Technology", "email": "", "image": "assets/images/team/2012/felix-schoppa.jpg" },
            { "name": "Mauritz Möller", "job": "Head of Construction", "email": "", "image": "assets/images/team/2012/mauritz.mller.jpg" },
            { "name": "Ake Ewald", "job": "Head of Manufacturing", "email": "", "image": "assets/images/team/2012/ake-ewald.jpg" },
           ]
        },
        {
          "name": "Suspension",
          "members": [
            { "name": "Jan Mehnen", "job": "Head of Suspension", "email": "", "image": "assets/images/team/2012/jan-mehnen.jpg" },
            { "name": "Hans Holub", "job": "Pedals and Brakes", "email": "", "image": "assets/images/team/2012/hans-holub.jpg" },
            { "name": "Nico Holst", "job": "Steering", "email": "", "image": "assets/images/team/2012/nico-holst.jpg" },
            { "name": "Philipp von Stürmer", "job": "A-Arms", "email": "", "image": "assets/images/team/2012/dummy.jpg" },
            { "name": "Lars Baetcke", "job": "Powertrain", "email": "", "image": "assets/images/team/2012/lars-baetcke.jpg" },
          ]
        },
       
        {
          "name": "Chassis",
          "members": [
            { "name": "Patrick Patolla", "job": "Head of Chassis", "email": "", "image": "assets/images/team/2012/patrick-patolla.jpg" },
            { "name": "Christian", "job": "Cockpit", "email": "", "image": "assets/images/team/2012/christian-busch.jpg" },
            { "name": "Petter Ploog", "job": "Frame", "email": "", "image": "assets/images/team/2012/petter-ploog.jpg" },
            { "name": "Audrius Doblies", "job": "Skin", "email": "", "image": "assets/images/team/2014/jonas-farnbacher.jpg" },
            ]
        },
       {
          "name": "Ergonomics",
          "members": [
            { "name": "Lukas Hardt", "job": "Head of Ergonomics", "email": "", "image": "assets/images/team/2014/lukas-hardt.jpg" },
            { "name": "Mark Tappe", "job": "Steering Wheel / Armature", "email": "", "image": "assets/images/team/2014/mark-tappe.jpg" },
            { "name": "Jan Mehnen", "job": "Pedals", "email": "", "image": "assets/images/team/2014/dummy.jpg" },
            { "name": "Ambika Sriramakrishna", "job": "Support", "email": "", "image": "assets/images/team/2014/ambika-sriramakrishna.jpg" },
            ]
        },
      {
          "name": "Electronics",
          "members": [
            { "name": "Mirko Schimkat", "job": "Head of Electronics", "email": "", "image": "assets/images/team/2012/mirko-schimkat.jpg" },
            { "name": "Axel Engelhard", "job": "Powertrain", "email": "", "image": "assets/images/team/2012/axel-engelhardt.jpg" },
            { "name": "Tom Gmeinder", "job": "Boardcomputer", "email": "", "image": "assets/images/team/2012/dummy.jpg" },
            { "name": "Sascha Path", "job": "Security", "email": "", "image": "assets/images/team/2012/sascha-path.jpg" },
            { "name": "Lukas Flocken", "job": "Motor", "email": "", "image": "assets/images/team/2012/lukas-flocken.jpg" },
            { "name": "Simone Werksnies", "job": "Steering", "email": "", "image": "assets/images/team/2012/dummy.jpg" },
            { "name": "Mathias Laser", "job": "Cooling", "email": "", "image": "assets/images/team/2012/Mathias-Laser.jpg" },
            { "name": "Finn Meiners", "job": "Accumulator", "email": "", "image": "assets/images/team/2012/finn-meiners.jpg" },
          ]
        },
    
     ],
};
