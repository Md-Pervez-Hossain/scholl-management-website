import Academic from '@/components/Academic/Academic';
import PhotoGallery from '@/components/Gallery/PhotoGallery';
import NoticeBoard from '@/components/Notice/NoticeBoard/NoticeBoard';
import Container from '@/components/ui/Container';
import React from 'react';

const AcademicPage = () => {
  return (
    <div>
      <Academic />
      <Container>
        <NoticeBoard />
        <PhotoGallery />
      </Container>

    </div>
  );
};

export default AcademicPage;