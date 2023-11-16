import Academic from '@/components/Academic/Academic';
import PhotoGallery from '@/components/Gallery/PhotoGallery';
import NoticeBoard from '@/components/Notice/NoticeBoard/NoticeBoard';
import React from 'react';

const AcademicPage = () => {
  return (
    <div>
      <Academic />
      <NoticeBoard />
      <PhotoGallery />
    </div>
  );
};

export default AcademicPage;