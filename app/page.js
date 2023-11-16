
import Chairman from '@/components/Chairman/Chairman'
import States from '@/components/States/States'
import Information from '@/components/Information/Information'
import PhotoGallery from '@/components/Gallery/PhotoGallery'
import Admission from '@/components/AdmissionAndShift/Admission'
import Shifts from '@/components/Shifts/Shifts'
import Notice from '@/components/Notice/Notice'
export default function Home() {
  return (
    <main>
      <Chairman />
      <States />
      <Information />
      <Notice />
      <Admission />
      <Shifts />
      <PhotoGallery />
    </main>
  )
}
