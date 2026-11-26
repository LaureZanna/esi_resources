/*
  NYU Earth Systems Institute: methods, code and data
  ----------------------------------------------------
  This is the only file you need to edit to update the page.

  FACULTY: key -> [display name, profile URL]
  ITEMS:   one row per entry:
    [type, name, faculty keys, link, description, research areas, checked]
      type      "m" = method/algorithm, "c" = code repository, "d" = dataset
      faculty   space-separated keys from FACULTY, e.g. "zanna adcroft"
      areas     letters: A = Next Gen AI Models, E = Earth Science,
                I = Infrastructure, O = Open Research   e.g. "AEO"
      checked   1 = link verified, 0 = not yet verified

  SHOW_UNVERIFIED: set to false to hide rows with checked = 0.
*/
window.ESI_DATA = {
  SHOW_UNVERIFIED: true,

  FACULTY: {
    adcroft:["Alistair Adcroft","https://engineering.nyu.edu/faculty/alistair-adcroft"],
    guibaud:["Augustin Guibaud","https://engineering.nyu.edu/faculty/augustin-guibaud"],
    zanna:["Laure Zanna","https://caos.cims.nyu.edu/dynamic/people/faculty/"],
    fg:["Carlos Fernandez-Granda","https://math.nyu.edu/~cfgranda/"],
    li:["Zongyi Li","https://zongyi-li.github.io/"],
    gerber:["Ed Gerber","https://edwinpgerber.github.io/"],
    shamekh:["Sara Shamekh","https://storm-earth-lab.github.io/"],
    weare:["Jonathan Weare","https://cims.nyu.edu/~weare/"],
    yzhang:["Yi Zhang","https://yzhang-aos.github.io/"],
    yin:["Yi Yin","https://as.nyu.edu/faculty/yi-yin.html"],
    mcdermid:["Sonali McDermid","https://as.nyu.edu/faculty/sonali-mcdermid.html"],
    giannini:["Ale Giannini","https://as.nyu.edu/faculty/AlessandraGiannini.html"],
    bergelson:["Joy Bergelson","https://as.nyu.edu/biology/directory.joy-bergelson.html"],
    kanter:["David Kanter","https://as.nyu.edu/faculty/david-kanter.html"],
    wani:["Omar Wani","https://www.omarwani.com/"],
    miura:["Yuki Miura","https://engineering.nyu.edu/faculty/yuki-miura"],
    mcphearson:["Timon McPhearson","https://as.nyu.edu/faculty/timon-mcphearson.html"],
    silverman:["Andrea Silverman","https://engineering.nyu.edu/faculty/andrea-silverman"],
    mallapragada:["Dharik Mallapragada","https://engineering.nyu.edu/faculty/dharik-mallapragada"],
    modestino:["Miguel Modestino","http://www.miguelmodestino.com/"],
    pascual:["Mercedes Pascual","https://as.nyu.edu/biology/directory.mercedes-pascual.html"],
    lindsay:["Grace Lindsay","https://cds.nyu.edu/team/grace-lindsay/"]
  },

  ITEMS: [
    ["m","Autoregressive ConvNeXt U-Net ocean emulator","zanna fg adcroft","https://arxiv.org/abs/2412.03795","Samudra: a 3D global ocean emulator, stable for centuries and about 150 times faster than the OM4 ocean model.","AEIO",1],
    ["m","Hybrid ML-physics ocean eddy parameterization","adcroft zanna","https://www.cesm.ucar.edu/sites/default/files/2025-02/2025-cesm-omwg-pperezhoginpptx.pdf","Physics-constrained neural network parameterization of mesoscale eddies in a global ocean model.","AEIO",1],
    ["m","Finite-volume ocean discretization and general vertical coordinates","adcroft","https://adcroft.github.io/landing.html","Numerical methods for bottom topography and vertical coordinates that underpin MOM6.","AEIO",1],
    ["m","Neural operators (FNO, SFNO, GINO, PINO)","li","https://github.com/neuraloperator/neuraloperator","Resolution-invariant learning of the solution operators of PDEs.","AO",1],
    ["m","ML subgrid parameterization","zanna gerber shamekh adcroft","https://leap-stc.github.io/ClimSim","Neural networks that replace convection, gravity wave and ocean eddy schemes in climate models.","AEIO",1],
    ["m","Deep ensembles for uncertainty quantification","gerber","https://github.com/DataWaveProject/WaveNet_UQ","Uncertainty estimates for an ML gravity wave parameterization.","AE",1],
    ["m","Transition path theory and committor estimation","weare gerber","https://arxiv.org/abs/2108.12727","Statistics of rare transitions such as sudden stratospheric warmings.","AEO",1],
    ["m","Dynamical Galerkin Approximation","weare","https://arxiv.org/abs/2102.07760","Forecasting rare events from short simulation data.","AEO",1],
    ["m","Analytical scaling theory for heat extremes","yzhang","https://yzhang-aos.github.io/","A theoretical upper bound on surface air temperature, usable as a physical benchmark for ML models.","A",1],
    ["m","Atmospheric flux inversion and data assimilation","yin","https://carbon-i.github.io/people/ScienceTeam/04_Yin.html","Top-down CO2 and methane fluxes from satellite observations.","AE",1],
    ["m","Bayesian sector attribution of methane emissions","yin","https://doi.org/10.1038/s43247-021-00312-6","Splits top-down methane fluxes into source sectors.","AE",1],
    ["m","Crop model ensembles","mcdermid","https://agmip.org","Multi-model crop yield response to climate and irrigation.","AE",0],
    ["m","SST teleconnection regression and composites","giannini","","Ocean drivers of Sahel and monsoon rainfall.","EIO",0],
    ["m","Genome-wide association studies","bergelson","https://1001genomes.org","Linking plant genotype to phenotype and to microbe interactions.","E",0],
    ["m","Nitrogen budget and policy modeling","kanter","https://as.nyu.edu/faculty/david-kanter.html","Nitrogen flows, pollution and policy design.","AE",0],
    ["m","Bayesian inference for non-stationary IDF curves","wani","https://sites.google.com/view/omarwani/ongoing-research","Extreme rainfall under climate change, for drainage design.","AE",1],
    ["m","Bayesian deep learning for damage classification","wani","https://sites.google.com/view/omarwani/ongoing-research","Probabilistic damage labels from satellite imagery.","AE",1],
    ["m","Physics-based storm surge and flood risk modeling","miura","https://engineering.nyu.edu/news/nyu-tandon-supports-mta-combating-climate-threats","Fast scenario testing of flood defenses for the NYC subway.","AEO",1],
    ["m","Urban spatial analysis of heat and flood risk","mcphearson","https://as.nyu.edu/faculty/timon-mcphearson.html","Urban resilience and nature-based solutions.","AEO",0],
    ["m","Wastewater surveillance and pathogen inactivation modeling","silverman","https://engineering.nyu.edu/faculty/andrea-silverman","Pathogen fate in water systems and wastewater-based monitoring.","EIO",0],
    ["m","Graph convolutional network for wildfire susceptibility","guibaud","https://doi.org/10.1071/WF25092","Fire risk from surrounding vegetation and terrain; identified 84% of historical wildfire locations in Portugal.","AEI",1],
    ["m","Maximum Entropy species distribution modeling","guibaud","https://doi.org/10.1071/WF25092","Projects how dominant tree ecosystems shift with climate through 2060, feeding long-term wildfire risk.","AEI",1],
    ["m","Physics-informed machine learning for fire hazards","guibaud","https://www.ignytelab.org/","Combines fire dynamics physics with ML for fire safety in complex environments.","AEI",1],
    ["m","Dual Risk Index for structural fires","guibaud","https://doi.org/10.1016/j.firesaf.2026.104718","Combines fire frequency and emergency response time by census tract across New York City, 2013 to 2023.","AEI",1],
    ["m","Linear and mixed-integer capacity expansion","mallapragada","https://github.com/GenXProject/GenX.jl","Least-cost planning of generation, storage and transmission.","AIO",1],
    ["m","Bayesian optimization for experiment design","modestino","http://www.miguelmodestino.com/","ML-guided tuning of electrochemical processes.","IO",0],
    ["m","Stochastic compartmental models with iterated filtering","pascual","https://github.com/kingaa/pomp","Climate drivers of malaria and cholera transmission.","AE",0],
    ["m","Interpretability of deep networks","lindsay","https://cds.nyu.edu/team/grace-lindsay/","What trained networks represent, and why.","AEIO",0],
    ["c","m2lines/Samudra","zanna fg adcroft","https://github.com/m2lines/Samudra","Training, rollout and evaluation code for Samudra and Samudra 2.","AEIO",1],
    ["c","SamudrACE","zanna fg adcroft","https://arxiv.org/abs/2509.12490","Coupled atmosphere, ocean and sea ice emulator of GFDL CM4 (ACE2 atmosphere plus Samudra ocean); stable for centuries and captures ENSO.","AEIO",1],
    ["c","mom-ocean/MOM6","adcroft","https://github.com/mom-ocean/MOM6","Modular Ocean Model 6, NOAA’s primary ocean circulation model, co-created by Adcroft.","AEIO",0],
    ["c","MITgcm/MITgcm","adcroft","https://github.com/MITgcm/MITgcm","MIT general circulation model for global and process studies; Adcroft was a lead developer.","AEIO",0],
    ["c","pyqg/pyqg","zanna","https://github.com/pyqg/pyqg","Quasi-geostrophic model used to test parameterizations.","AEIO",0],
    ["c","m2lines/pyqg_parameterization_benchmarks","zanna","https://github.com/m2lines/pyqg_parameterization_benchmarks","Benchmarks for ML ocean eddy parameterizations.","AEIO",0],
    ["c","neuraloperator/neuraloperator","li","https://github.com/neuraloperator/neuraloperator","PyTorch library for FNO, SFNO, GINO and PINO.","AO",1],
    ["c","zongyi-li/fourier_neural_operator","li","https://github.com/zongyi-li/fourier_neural_operator","Code for the original Fourier Neural Operator paper.","AO",1],
    ["c","DataWaveProject/MiMA-machine-learning","gerber","https://github.com/DataWaveProject/MiMA-machine-learning","Idealized moist GCM used for ML gravity wave experiments.","AE",1],
    ["c","DataWaveProject/WaveNet_UQ","gerber","https://github.com/DataWaveProject/WaveNet_UQ","Deep ensemble uncertainty for the WaveNet gravity wave scheme.","AE",1],
    ["c","DataWaveProject/newCAM_emulation","gerber","https://github.com/DataWaveProject/newCAM_emulation","Gravity wave drag emulator for CAM and WACCM.","AE",1],
    ["c","Cambridge-ICCS/FTorch","gerber zanna adcroft","https://github.com/Cambridge-ICCS/FTorch","Couples PyTorch models to Fortran climate code.","AEIO",1],
    ["c","leap-stc/ClimSim","shamekh","https://github.com/leap-stc/ClimSim","Code for the ClimSim parameterization benchmark.","AEO",1],
    ["c","GenXProject/GenX.jl","mallapragada","https://github.com/GenXProject/GenX.jl","Power system capacity expansion model in Julia/JuMP.","AIO",1],
    ["c","macroenergy/DOLPHYN","mallapragada","https://github.com/macroenergy/DOLPHYN","Electricity and hydrogen capacity expansion model.","AIO",1],
    ["c","macroenergy/MacroEnergy.jl","mallapragada","https://github.com/macroenergy/MacroEnergy.jl","Multi-sector successor to GenX and DOLPHYN.","AIO",1],
    ["c","catalyst-cooperative/pudl","mallapragada","https://github.com/catalyst-cooperative/pudl","Cleaned US energy data (EIA, FERC) for model inputs.","AIO",0],
    ["c","clawpack/geoclaw","miura","https://github.com/clawpack/geoclaw","Storm surge and inundation solver.","AEO",0],
    ["c","kingaa/pomp","pascual","https://github.com/kingaa/pomp","R package for partially observed Markov process models.","AE",0],
    ["d","Samudra-OM4 training data","zanna fg adcroft","https://huggingface.co/datasets/M2LInES/Samudra-OM4","OM4 ocean model output (temperature, salinity, sea surface height, velocities) used to train Samudra.","AEIO",1],
    ["d","Samudra 2 model weights","zanna fg adcroft","https://huggingface.co/M2LInES/Samudra2","Pretrained emulator checkpoints at 1, 1/2 and 1/4 degree.","AEIO",1],
    ["d","SamudrACE model weights and forcing data","zanna fg adcroft","https://huggingface.co/allenai/SamudrACE-CM4-piControl","Trained SamudrACE weights, initial conditions and forcing data for the CM4 pre-industrial control run.","AEIO",1],
    ["d","ClimSim","shamekh","https://huggingface.co/datasets/LEAP/ClimSim_low-res","Large dataset for training ML subgrid parameterizations, at low and high resolution.","AEO",1],
    ["d","Loon balloon gravity wave observations","gerber","https://datawaveproject.github.io","High-resolution stratospheric balloon flight data released by DataWave.","AE",1],
    ["d","WACCM gravity wave emulation data","gerber","https://zenodo.org/records/10019987","Training data for the newCAM gravity wave emulator.","AE",1],
    ["d","FloodNet NYC sensors","miura mcphearson","https://www.floodnet.nyc","Street-level flood depth sensor network across New York City.","AEO",1],
  ]
};
