import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { Box } from '@mui/material';
import ProductHeadingCard from './ProductHeadingCard';
import ProductDataCard from './ProductDataCard';

// Head Protection Images
import HeadProtectionMain from '../../assets/HeadProtectionImages/HeadProtectionMain.webp'
import ConstructionSafetyHelmet from '../../assets/HeadProtectionImages/ConstructionSafetyHelmet.webp';
import ExcutiveSafetyHelmet from '../../assets/HeadProtectionImages/ExcutiveSafetyHelmet.webp';
import FireHelmet from '../../assets/HeadProtectionImages/FireHelmet.webp';
import HelmetWithLight from '../../assets/HeadProtectionImages/HelmetWithLight.webp';
import LoaderSafetyHelmet from '../../assets/HeadProtectionImages/LoaderSafetyHelmet.webp';
import SafetyHelmetWithVentilation from '../../assets/HeadProtectionImages/SafetyHelmetWithVentilation.webp';

// Eye Protection Images
import EyeProtectionMain from '../../assets/EyeProtectionImages/EyeProtectionMain.webp'
import ChemicalSplashClear from '../../assets/EyeProtectionImages/ChemicalSplashClear.webp';
import EyeWashShowerBottle from '../../assets/EyeProtectionImages/EyeWashShowerBottle.webp';
import GrinderGogglesSmoked from '../../assets/EyeProtectionImages/GrinderGogglesSmoked.webp';
import OverSpecs from '../../assets/EyeProtectionImages/OverSpecs.webp';
import SafetyGogglePunk from '../../assets/EyeProtectionImages/SafetyGogglePunk.webp';
import WeldingSafetyGoggles from '../../assets/EyeProtectionImages/WeldingSafetyGoggles.webp';

// Respiratory Protection Images
import RespiratoryProtectionMain from '../../assets/RespiratoryProtectionImages/RespiratoryProtectionMain.webp'
import CupTypeMask from '../../assets/RespiratoryProtectionImages/CupTypeMask.webp';
import DualCartridgeRespirator from '../../assets/RespiratoryProtectionImages/DualCartridgeRespirator.webp';
import FaceMask from '../../assets/RespiratoryProtectionImages/FaceMask.webp';
import FullFaceMask from '../../assets/RespiratoryProtectionImages/FullFaceMask.webp';
import HalfFaceMask from '../../assets/RespiratoryProtectionImages/HalfFaceMask.webp';
import WeldingMask from '../../assets/RespiratoryProtectionImages/WeldingMask.webp';

// Ear Protection Images
import EarProtectionMain from '../../assets/EarProtectionImages/EarProtectionMain.webp'
import EarProtectionTitle from '../../assets/EarProtectionImages/EarProtectionTitle.jpeg';
import DisposableEarPlug from '../../assets/EarProtectionImages/DisposableEarPlug.webp';
import EarDefender from '../../assets/EarProtectionImages/EarDefender.webp';
import EarMuffEconomy from '../../assets/EarProtectionImages/EarMuffEconomy.webp';
import EarMuffFoldable from '../../assets/EarProtectionImages/EarMuffFoldable.webp';
import EarMuffPremium from '../../assets/EarProtectionImages/EarMuffPremium.webp';
import ReusableEarPlug from '../../assets/EarProtectionImages/ReusableEarPlug.webp';

// Face Protection Images
import FaceProtectionMain from '../../assets/FaceProtectionImages/FaceProtectionMain.webp'
import ChemicalSplashFaceShield from '../../assets/FaceProtectionImages/ChemicalSplashFaceShield.webp';
import FaceShieldWithEarMuff from '../../assets/FaceProtectionImages/FaceShieldWithEarMuff.webp';
import GrinderFaceShield from '../../assets/FaceProtectionImages/GrinderFaceShield.webp';
import HelmetWithFaceShield from '../../assets/FaceProtectionImages/HelmetWithFaceShield.webp';
import HelmetWithWeldingShield from '../../assets/FaceProtectionImages/HelmetWithWeldingShield.webp';
import WeldingHandSheield from '../../assets/FaceProtectionImages/WeldingHandSheield.webp';

// Hand Protection Images
import HandProtectionMain from '../../assets/HandProtectionImages/HandProtectionMain.webp'
import AcidAlkaliGloves from '../../assets/HandProtectionImages/AcidAlkaliGloves.webp';
import AsbestosGloves from '../../assets/HandProtectionImages/AsbestosGloves.webp';
import CanadianGloves from '../../assets/HandProtectionImages/CanadianGloves.webp';
import ColdStorage from '../../assets/HandProtectionImages/ColdStorage.webp';
import ColouredCottonGloves from '../../assets/HandProtectionImages/ColouredCottonGloves.webp';
import CutResistantGloves from '../../assets/HandProtectionImages/CutResistantGloves.webp';
import ElectricalGloves from '../../assets/HandProtectionImages/ElectricalGloves.webp';
import HeatResistantGloves from '../../assets/HandProtectionImages/HeatResistantGloves.webp';
import KevlarAluminizedGloves from '../../assets/HandProtectionImages/KevlarAluminizedGloves.webp';
import LatexGolves from '../../assets/HandProtectionImages/LatexGolves.webp';
import NitrileCoatedCuffType from '../../assets/HandProtectionImages/NitrileCoatedCuffType.webp';
import NitrileCoatedGloves from '../../assets/HandProtectionImages/NitrileCoatedGloves.webp';
import NitrileExaminationGloves from '../../assets/HandProtectionImages/NitrileExaminationGloves.webp';
import NitrileGloves from '../../assets/HandProtectionImages/NitrileGloves.webp';
import PalmKevlarGlovers from '../../assets/HandProtectionImages/PalmKevlarGlovers.webp';
import PUCoatedGloves from '../../assets/HandProtectionImages/PUCoatedGloves.webp';
import PVCDottedGloves from '../../assets/HandProtectionImages/PVCDottedGloves.webp';
import SSMeshGloves from '../../assets/HandProtectionImages/SSMeshGloves.webp';

// Foot Protection Images
import FootProtectionMain from '../../assets/FootProtectionImages/FootProtectionMain.webp'
import PUDoubleDensityShoe from '../../assets/FootProtectionImages/PUDoubleDensityShoe.webp';
import PUDoubleDensityShoeHighAnkle from '../../assets/FootProtectionImages/PUDoubleDensityShoeHighAnkle.webp';
import PUSingleDensityShoe from '../../assets/FootProtectionImages/PUSingleDensityShoe.webp';
import PVCGumBoot14 from '../../assets/FootProtectionImages/PVCGumBoot14.webp';
import PVCSoleShoe from '../../assets/FootProtectionImages/PVCSoleShoe.webp';
import PVCSoleShoeSpecial from '../../assets/FootProtectionImages/PVCSoleShoeSpecial.webp';

// Body Protection Images
import BodyProtectionTitle from '../../assets/BodyProtectionImages/BodyProtectionTitle.jpeg';
import BoiledSuit from '../../assets/BodyProtectionImages/BoilerSuit.webp';
import CottonApron from '../../assets/BodyProtectionImages/CottonApron.webp';
import FireProximitySuit from '../../assets/BodyProtectionImages/FireProximitySuit.webp';
import LeatherApron from '../../assets/BodyProtectionImages/LeatherApron.webp';
import PVCApron from '../../assets/BodyProtectionImages/PVCApron.webp';
import PVCSuit from '../../assets/BodyProtectionImages/PVCSuit.webp';

// Fall Protection Images
import FallProtectionMain from '../../assets/FallProtectionImages/FallProtectionMain.webp'
import BraidedNet from '../../assets/FallProtectionImages/BraidedNet.webp';
import BraidedWithMonofilamentNet from '../../assets/FallProtectionImages/BraidedWithMonofilamentNet.webp';
import DoubleCordNet from '../../assets/FallProtectionImages/DoubleCordNet.webp';
import ElectricalRubberMat from '../../assets/FallProtectionImages/ElectricalRubberMat.webp';
import EnergyAbsorber from '../../assets/FallProtectionImages/EnergyAbsorber.webp';
import FallArrester from '../../assets/FallProtectionImages/FallArrester.webp';
import GripDescender from '../../assets/FallProtectionImages/GripDescender.webp';
import Hooks from '../../assets/FallProtectionImages/Hooks.webp';
import LashingBelt from '../../assets/FallProtectionImages/LashingBelt.webp';
import LifeLineRope from '../../assets/FallProtectionImages/LifeLineRope.webp';
import LockoutSafety from '../../assets/FallProtectionImages/LockoutSafety.webp';
import OverlayWithFishNet from '../../assets/FallProtectionImages/OverlayWithFishNet.webp';
import OverlayWithShadedNet from '../../assets/FallProtectionImages/OverlayWithShadedNet.webp';
import PolymideRope from '../../assets/FallProtectionImages/PolymideRope.webp';
import RetractableFallArrester from '../../assets/FallProtectionImages/RetractableFallArrester.webp';
import RopeLadder from '../../assets/FallProtectionImages/RopeLadder.webp';
import SafetyHarness from '../../assets/FallProtectionImages/SafetyHarness.webp';
import SingleCordNet from '../../assets/FallProtectionImages/SingleCordNet.webp';

// Road Safety Images
import RoadSafetyMain from '../../assets/RoadSafetyImages/RoadSafetyMain.webp'
import BarricadingNet from '../../assets/RoadSafetyImages/BarricadingNet.webp';
import BarricationTape from '../../assets/RoadSafetyImages/BarricationTape.webp';
import CableProtector from '../../assets/RoadSafetyImages/CableProtector.webp';
import ConvexMirror from '../../assets/RoadSafetyImages/ConvexMirror.webp';
import ExpandableBarrierRed from '../../assets/RoadSafetyImages/ExpandableBarrierRed.webp';
import FireBlanket from '../../assets/RoadSafetyImages/FireBlanket.webp';
import FirstAidBox from '../../assets/RoadSafetyImages/FirstAidBox.webp';
import FloorStand from '../../assets/RoadSafetyImages/FloorStand.webp';
import LifeBuoy from '../../assets/RoadSafetyImages/LifeBuoy.webp';
import LifeJacket from '../../assets/RoadSafetyImages/LifeJacket.webp';
import MessageBollard from '../../assets/RoadSafetyImages/MessageBollard.webp';
import MetalDetector from '../../assets/RoadSafetyImages/MetalDetector.webp';
import ParkingSafetyAccessories from '../../assets/RoadSafetyImages/ParkingSafetyAccessories.webp';
import PlasticSpeedBreaker from '../../assets/RoadSafetyImages/PlasticSpeedBreaker.webp';
import QManager from '../../assets/RoadSafetyImages/QManager.webp';
import RefectiveTape from '../../assets/RoadSafetyImages/RefectiveTape.webp';
import RefectorJacket from '../../assets/RoadSafetyImages/RefectorJacket.webp';
import RoadBarriers from '../../assets/RoadSafetyImages/RoadBarriers.webp';
import RoadStudsAndRefector from '../../assets/RoadSafetyImages/RoadStudsAndRefector.webp';
import RubberSpeedBreaker from '../../assets/RoadSafetyImages/RubberSpeedBreaker.webp';
import SolarChevronAndBinker from '../../assets/RoadSafetyImages/SolarChevronAndBinker.webp';
import SolarFlasher from '../../assets/RoadSafetyImages/SolarFlasher.webp';
import SolarRoadStuds from '../../assets/RoadSafetyImages/SolarRoadStuds.webp';
import SpringPostAndLaneBlocks from '../../assets/RoadSafetyImages/SpringPostAndLaneBlocks.webp';
import TrafcBaton from '../../assets/RoadSafetyImages/TrafcBaton.webp';
import TrafficCone from '../../assets/RoadSafetyImages/TrafficCone.webp';
import UnderVehicleMirror from '../../assets/RoadSafetyImages/UnderVehicleMirror.webp';
import WarningTriangle from '../../assets/RoadSafetyImages/WarningTriangle.webp';
import WheelLock from '../../assets/RoadSafetyImages/WheelLock.webp';
import WindSock from '../../assets/RoadSafetyImages/WindSock.webp';

// Fire Safety Images
import FireSafetyMain from '../../assets/FireProtectionImages/FireSafetyMain.webp'
import Coupling from '../../assets/FireProtectionImages/Coupling.webp';
import FireBall from '../../assets/FireProtectionImages/FireBall.webp';
import FireExtinguisher from '../../assets/FireProtectionImages/FireExtinguisher.webp';
import HosePipe from '../../assets/FireProtectionImages/HosePipe.webp';
import HydrantValve from '../../assets/FireProtectionImages/HydrantValve.webp';
import Nozzle from '../../assets/FireProtectionImages/Nozzle.webp';

// Tools & Hardware Machinery Images
import ToolsAndHardwareMachinery from '../../assets/ToolsAndHardwareMachinery/ToolsAndHardwareMachinery.webp'
import AngleGrinderMachine from '../../assets/ToolsAndHardwareMachinery/AngleGrinderMachine.webp';
import BoltAndNuts from '../../assets/ToolsAndHardwareMachinery/BoltAndNuts.webp';
import CubeCylinderMoulds from '../../assets/ToolsAndHardwareMachinery/CubeCylinderMoulds.webp';
import DrillMachine from '../../assets/ToolsAndHardwareMachinery/DrillMachine.webp';
import WheelBarrow from '../../assets/ToolsAndHardwareMachinery/WheelBarrow.webp';
import WheelCuttingMachine from '../../assets/ToolsAndHardwareMachinery/WheelCuttingMachine.webp';

// Scaff-Folding & Surveying / Testing Instruments Images
import ScaffoldingAndSurveyingTestingInstruments from '../../assets/StaffFoldingAndSurveying/ScaffoldingAndSurveyingTestingInstruments.webp'
import GuguClampsMachines from '../../assets/StaffFoldingAndSurveying/GuguClampsMachines.webp';
import ShutteringClamps from '../../assets/StaffFoldingAndSurveying/ShutteringClamps.webp';
import StirrupsHeadsUJack from '../../assets/StaffFoldingAndSurveying/StirrupsHeadsUJack.webp';
import SwivelFixedCoupler from '../../assets/StaffFoldingAndSurveying/SwivelFixedCoupler.webp';
import TieRods from '../../assets/StaffFoldingAndSurveying/TieRods.webp';
import WallerPlateWingNut from '../../assets/StaffFoldingAndSurveying/WallerPlateWingNut.webp';

const AllProductDatas = forwardRef((props, ref) => {
  // Categories array with IDs matching ServiceNavBar (1-13)
  const categories = [
    {
      id: 1,
      title: "Head Protection",
      image: HeadProtectionMain,
      products: [
        { id: 101, name: "Construction Safety Helmet", image: ConstructionSafetyHelmet },
        { id: 102, name: "Excutive Safety Helmet", image: ExcutiveSafetyHelmet },
        { id: 103, name: "Fire Helmet", image: FireHelmet },
        { id: 104, name: "Helmet With Light", image:HelmetWithLight  },
        { id: 105, name: "Loader Safety Helmet", image: LoaderSafetyHelmet  },
        { id: 106, name: "Safety Helmet With Ventilation", image: SafetyHelmetWithVentilation },
      ]
    },
     {
      id: 2,
      title: "Eye Protection",
      image: EyeProtectionMain,
      products: [
        { id: 201, name: "Chemical Splash Clear", image:ChemicalSplashClear },
        { id: 202, name: "Eye Wash Shower Bottle", image:EyeWashShowerBottle },
        { id: 203, name: "Grinder Goggles Smoked", image: GrinderGogglesSmoked },
        { id: 204, name: "Over Specs", image:OverSpecs  },
        { id: 205, name: "Safety Goggle Punk", image: SafetyGogglePunk  },
        { id: 206, name: "Welding Safety Goggles", image:WeldingSafetyGoggles },
      ]
    },
     {
      id: 3,
      title: "Respiratory Protection",
      image: RespiratoryProtectionMain,
      products: [
        { id: 301, name: "Cup Type Mask", image: CupTypeMask },
        { id: 302, name: "Dual Cartridge Respirator", image: DualCartridgeRespirator },
        { id: 303, name: "Face Mask", image: FaceMask },
        { id: 304, name: "Full Face Mask", image:FullFaceMask  },
        { id: 305, name: "Half Face Mask", image: HalfFaceMask  },
        { id: 306, name: "Welding Mask", image: WeldingMask },
      ]
    },
     {
      id: 4,
      title: "Ear Protection",
      image: EarProtectionMain,
      products: [
        { id: 401, name: "Disposable Ear Plug", image: DisposableEarPlug },
        { id: 402, name: "Ear Defender", image: EarDefender },
        { id: 403, name: "Ear Muff Economy", image: EarMuffEconomy },
        { id: 404, name: "Ear Muff Foldable", image: EarMuffFoldable },
        { id: 405, name: "Ear Muff Premium", image: EarMuffPremium },
        { id: 406, name: "Reusable Ear Plug", image: ReusableEarPlug },
      ]
    },
     {
      id: 5,
      title: "Face Protection",
      image: FaceProtectionMain,
      products: [
        { id: 501, name: "Chemical Splash Face Shield", image:ChemicalSplashFaceShield},
        { id: 502, name: "Face Shield With Ear Muff", image:FaceShieldWithEarMuff},
        { id: 503, name: "Grinder Face Shield", image:GrinderFaceShield},
        { id: 504, name: "Helmet With Face Shield", image:HelmetWithFaceShield},
        { id: 505, name: "Helmet With Welding Shield", image: HelmetWithWeldingShield},
        { id: 506, name: "Welding Hand Sheield", image:WeldingHandSheield},
      ]
    },
     {
      id: 6,
      title: "Hand Protection",
      image:HandProtectionMain,
      products: [
        { id: 601, name: "Acid Alkali Gloves", image: AcidAlkaliGloves },
        { id: 602, name: "Asbestos Gloves", image: AsbestosGloves },
        { id: 603, name: "Canadian Gloves", image: CanadianGloves },
        { id: 604, name: "Cold Storage", image:ColdStorage  },
        { id: 605, name: "Coloured Cotton Gloves", image: ColouredCottonGloves},
        { id: 606, name: "Cut Resistant Gloves", image: CutResistantGloves},
        { id: 607, name: "Electrical Gloves", image: ElectricalGloves},
        { id: 608, name: "Heat Resistant Gloves", image: HeatResistantGloves},
        { id: 609, name: "Kevlar Aluminized Gloves", image: KevlarAluminizedGloves},
        { id: 610, name: "Latex Golves", image:LatexGolves },
        { id: 611, name: "Nitrile Coated Cuff Type", image: NitrileCoatedCuffType  },
        { id: 612, name: "Nitrile Coated Gloves", image: NitrileCoatedGloves },
        { id: 613, name: "Nitrile Examination Gloves", image: NitrileExaminationGloves },
        { id: 614, name: "Nitrile Gloves", image: NitrileGloves },
        { id: 615, name: "Palm Kevlar Glovers", image: PalmKevlarGlovers },
        { id: 616, name: "PU Coated Gloves", image:PUCoatedGloves  },
        { id: 617, name: "PVC Dotted Gloves", image: PVCDottedGloves  },
        { id: 618, name: "SS Mesh Gloves", image: SSMeshGloves },
      ]
    },
     {
      id: 7,
      title: "Foot Protection",
      image: FootProtectionMain,
      products: [
        { id: 701, name: "PU Double Density Shoe", image:PUDoubleDensityShoe },
        { id: 702, name: "PU Double Density Shoe (High Ankle)", image:PUDoubleDensityShoeHighAnkle },
        { id: 703, name: "PU Single Density Shoe", image:PUSingleDensityShoe },
        { id: 704, name: "PVC Gum Boot '14'", image:PVCGumBoot14  },
        { id: 705, name: "PVC Sole Shoe", image:PVCSoleShoe  },
        { id: 706, name: "PVC Sole Shoe (Special)", image: PVCSoleShoeSpecial },
      ]
    },
     {
      id: 8,
      title: "Body Protection",
      image: BodyProtectionTitle,
      products: [
        { id: 801, name: "Boiled Suit", image: BoiledSuit },
        { id: 802, name: "Cotton Apron", image: CottonApron },
        { id: 803, name: "Fire Proximity Suit", image: FireProximitySuit },
        { id: 804, name: "Leather Apron", image:LeatherApron  },
        { id: 805, name: "PVC Apron", image: PVCApron  },
        { id: 806, name: "PVC Suit", image: PVCSuit },
      ]
    },
    {
      id: 9,
      title: "Fall Protection",
      image: FallProtectionMain,
      products: [
        { id: 901, name: "Braided Net", image: BraidedNet },
        { id: 902, name: "Braided With Monofilament Net", image: BraidedWithMonofilamentNet },
        { id: 903, name: "Double Cord Net", image: DoubleCordNet },
        { id: 904, name: "Electrical Rubber Mat", image: ElectricalRubberMat },
        { id: 905, name: "Energy Absorber", image: EnergyAbsorber },
        { id: 906, name: "Fall Arrester", image: FallArrester },
        { id: 907, name: "Grip Descender", image: GripDescender },
        { id: 908, name: "Hooks", image: Hooks },
        { id: 909, name: "Lashing Belt", image: LashingBelt },
        { id: 910, name: "Life Line Rope", image: LifeLineRope },
        { id: 911, name: "Lockout Safety", image: LockoutSafety },
        { id: 912, name: "Overlay With Fish Net", image: OverlayWithFishNet },
        { id: 913, name: "Overlay With Shaded Net", image: OverlayWithShadedNet },
        { id: 914, name: "Polymide Rope", image: PolymideRope },
        { id: 915, name: "Retractable Fall Arrester", image: RetractableFallArrester },
        { id: 916, name: "Rope Ladder", image: RopeLadder },
        { id: 917, name: "Safety Harness", image: SafetyHarness },
        { id: 918, name: "Single Cord Net", image: SingleCordNet },
      ]
    },
    {
      id: 10,
      title: "Road Safety",
      image: RoadSafetyMain,
      products: [
        { id: 1001, name: "Barricading Net", image: BarricadingNet },
        { id: 1002, name: "Barrication Tape", image: BarricationTape },
        { id: 1003, name: "Cable Protector", image: CableProtector },
        { id: 1004, name: "Convex Mirror", image: ConvexMirror },
        { id: 1005, name: "Expandable Barrier Red", image: ExpandableBarrierRed },
        { id: 1006, name: "Fire Blanket", image: FireBlanket },
        { id: 1007, name: "First Aid Box", image: FirstAidBox },
        { id: 1008, name: "Floor Stand", image: FloorStand },
        { id: 1009, name: "Life Buoy", image: LifeBuoy },
        { id: 1010, name: "Life Jacket", image: LifeJacket },
        { id: 1011, name: "Message Bollard", image: MessageBollard },
        { id: 1012, name: "Metal Detector", image: MetalDetector },
        { id: 1013, name: "Parking Safety Accessories", image: ParkingSafetyAccessories },
        { id: 1014, name: "Plastic Speed Breaker", image: PlasticSpeedBreaker },
        { id: 1015, name: "Q-Manager", image: QManager },
        { id: 1016, name: "Refective Tape", image: RefectiveTape},
        { id: 1017, name: "Refector Jacket", image: RefectorJacket},
        { id: 1018, name: "Road Barriers", image: RoadBarriers},
        { id: 1019, name: "Road Studs & Refector", image: RoadStudsAndRefector },
        { id: 1020, name: "Rubber Speed Breaker", image: RubberSpeedBreaker },     
        { id: 1021, name: "Solar Chevron & Binker", image: SolarChevronAndBinker},
        { id: 1022, name: "Solar Flasher", image: SolarFlasher },
        { id: 1023, name: "Solar Road Studs", image: SolarRoadStuds },
        { id: 1024, name: "Wind Sock", image: WindSock },
        { id: 1025, name: "Spring Post & Lane Blocks", image: SpringPostAndLaneBlocks},
        { id: 1026, name: "Traffic Baton", image: TrafcBaton },
        { id: 1027, name: "Traffic Cone", image: TrafficCone },
        { id: 1028, name: "Under Vehicle Mirror", image: UnderVehicleMirror},
        { id: 1029, name: "Warning Triangle", image: WarningTriangle },
        { id: 1030, name: "Wheel Lock", image: WheelLock },
      ]
    },
    {
      id: 11,
      title: "Fire Safety",
      image: FireSafetyMain,
      products: [
        { id: 1101, name: "Coupling", image: Coupling },
        { id: 1102, name: "Fire Ball", image:FireBall },
        { id: 1103, name: "Fire Extinguisher", image: FireExtinguisher },
        { id: 1104, name: "Hose Pipe", image: HosePipe },
        { id: 1105, name: "Hydrant Valve", image: HydrantValve },
        { id: 1106, name: "Nozzle", image: Nozzle },
      ]
    },
    {
      id: 12,
      title: "Tools & Hardware Machinery",
      image: ToolsAndHardwareMachinery,
      products: [
        { id: 1201, name: "Angle Grinder Machine", image: AngleGrinderMachine},
        { id: 1202, name: "Bolt And Nuts", image: BoltAndNuts },
        { id: 1203, name: "Cube Cylinder Moulds", image: CubeCylinderMoulds },
        { id: 1204, name: "Drill Machine", image: DrillMachine },
        { id: 1205, name: "Wheel Barrow", image: WheelBarrow },
        { id: 1206, name: "Wheel Cutting Machine", image: WheelCuttingMachine },
      ]
    },
    {
      id: 13,
      title:"Scaffolding & Surveying Testing Instruments",
      image: ScaffoldingAndSurveyingTestingInstruments,
      products: [
        { id: 1301, name: "Gugu Clamps Machines", image: GuguClampsMachines},
        { id: 1302, name: "Shuttering Clamps", image: ShutteringClamps },
        { id: 1303, name: "Stirrups Heads U Jack", image: StirrupsHeadsUJack },
        { id: 1304, name: "Swivel Fixed Coupler", image: SwivelFixedCoupler },
        { id: 1305, name: "Tie Rods", image: TieRods },
        { id: 1306, name: "Waller Plate Wing Nut", image: WallerPlateWingNut },
      ]
    }
  ];

  // Create refs for each category section
  const sectionRefs = useRef({});

  // Function to scroll to a specific category
 // Function to scroll to a specific category - Alternative version
const scrollToCategory = (categoryId) => {
  console.log(`Scrolling to category ID: ${categoryId}`);
  const sectionId = `category-${categoryId}`;
  const section = sectionRefs.current[sectionId];
  
  if (section) {
    // Wait for next frame to ensure DOM is ready
    requestAnimationFrame(() => {
      // Calculate offset more reliably
      const navbar = document.querySelector('header, .MuiAppBar-root, nav');
      const navbarHeight = navbar ? navbar.offsetHeight + 100 : 110; // Extra padding
      
      // Get the element's position relative to document
      const elementRect = section.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      
      // Calculate scroll position
      const scrollPosition = absoluteElementTop - navbarHeight;
      
      // Scroll to position
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      
    });
  } else {
    console.warn(`Section with ID ${sectionId} not found`);
    // Fallback: Try using native element scrolling
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
};


  // Expose the scroll function to parent via ref
  useImperativeHandle(ref, () => ({
    scrollToCategory
  }));

  return (
    <Box sx={{ py: { xs: 0.5, md: 1.5 }, px: { xs: 0.5, md: 1 } }}>
      {categories.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <Box
            key={item.id}
            ref={(el) => {
              sectionRefs.current[`category-${item.id}`] = el;
            }}
            id={`category-${item.id}`}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: isEven ? 'row' : 'row-reverse' },
              alignItems: { xs: 'center', lg: 'flex-start' },
              // mb: { xs: 2, lg: 5 },
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out forwards',
              animationDelay: `${index * 0.3}s`,
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(50px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
              scrollMarginTop: '80px', // Adjust this based on your navbar height
              position: 'relative',
              transition: 'all 0.5s ease',

              // Create an invisible anchor point above the section
              '&::before': {
                content: '""',
                display: 'grid',
                position: 'absolute',
                top: '-80px', // Matches scrollMarginTop
                height: '100px',
                width: '80%',
                pointerEvents: 'none',
              },
              bgcolor:"white", boxShadow:10,
              // borderRadius:10,
              width:"90%",
              ml:8,
              mb:-5
            }}
          >
            {/* Hero Image + Text Card */}
            <Box sx={{ flex: 1, width: '100%', maxWidth: { lg: '100%' }, }} >
              <ProductHeadingCard
                title={item.title}
                image={item.image}
                align={isEven ? 'left' : 'right'}
                onButtonClick={() => scrollToCategory(item.id)}
              />
            </Box>

            {/* Product Grid Card on Opposite Side */}
            <Box sx={{ flex: 1, width: '100%', maxWidth: { lg: '100%' } }}>
              <ProductDataCard
                products={item.products}
                headerTitle={item.title}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
});

export default AllProductDatas;