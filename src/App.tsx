import { Presentation } from './components/Presentation'
import { CoverSlide } from './slides/CoverSlide'
import { MarketSlide } from './slides/MarketSlide'
import { SophisticationSlide } from './slides/SophisticationSlide'
import { CompetitorSlide } from './slides/CompetitorSlide'
import { CompetitorAdSlide } from './slides/CompetitorAdSlide'
import { PlayersSlide } from './slides/PlayersSlide'
import { AdsLibrarySlide } from './slides/AdsLibrarySlide'
import { PivotSlide } from './slides/PivotSlide'
import { DesireSlide } from './slides/DesireSlide'
import { ConsciousnessSlide } from './slides/ConsciousnessSlide'
import { DiagnosisSlide } from './slides/DiagnosisSlide'
import { OpportunitiesSlide } from './slides/OpportunitiesSlide'
import { MethodologySlide } from './slides/MethodologySlide'
import { DeliveriesSlide } from './slides/DeliveriesSlide'
import { TimelineSlide } from './slides/TimelineSlide'
import { OfferSlide } from './slides/OfferSlide'

const slides = [
  <CoverSlide />,
  <MarketSlide />,
  <SophisticationSlide />,
  <CompetitorSlide />,
  <CompetitorAdSlide />,
  <PlayersSlide />,
  <AdsLibrarySlide />,
  <PivotSlide />,
  <DesireSlide />,
  <ConsciousnessSlide />,
  <DiagnosisSlide />,
  <OpportunitiesSlide />,
  <MethodologySlide />,
  <DeliveriesSlide />,
  <TimelineSlide />,
  <OfferSlide />,
]

export default function App() {
  return <Presentation slides={slides} />
}
