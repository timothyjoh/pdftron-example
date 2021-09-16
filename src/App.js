import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import './App.css';

const App = () => {
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/PDFTRON_about.pdf',
      },
      viewer.current,
    ).then((instance) => {

      instance.UI.disableElements(['ribbons']);

      instance.UI.setToolbarGroup('toolbarGroup-Annotate');
      instance.UI.setHeaderItems(function(header) {
        header.getHeader('toolbarGroup-Annotate').push({
          type: 'toolGroupButton',
          toolGroup: 'lineTools',
          dataElement: 'lineToolGroupButton',
          title: 'annotation.line',
        });
        header.getHeader('toolbarGroup-Annotate').push({
          type: 'toolGroupButton',
          toolGroup: 'editTools',
          dataElement: 'redactionToolGroupButton',
          title: 'redaction',
        });
      });
      // instance.UI.setHeaderItems(header => {
      //   header.push({
      //     type: 'actionButton',
      //     img: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
      //     onClick: () => {
      //       alert('SAVED!')
      //     }
      //   });
      // });
      instance.UI.disableElements(['highlightToolButton2']);
      instance.UI.disableElements(['highlightToolButton3']);
      instance.UI.disableElements(['highlightToolButton4']);
      instance.UI.disableElements(['viewControlsButton']);
      instance.UI.disableElements(['searchButton']);
      instance.UI.disableElements(['toolsButton']);
      instance.UI.disableElements(['toolsOverlay']);
      instance.UI.disableElements(['squigglyToolGroupButton']);
      instance.UI.disableElements(['stickyToolGroupButton']);
      instance.UI.disableElements(['underlineToolGroupButton']);
      instance.UI.disableElements(['shapeToolGroupButton']);
      instance.UI.disableElements(['strikeoutToolGroupButton']);
      instance.UI.disableElements(['annotationCommentButton'])
      instance.UI.disableElements(['menuButton'])
      instance.UI.disableElements(['toggleNotesButton'])
      instance.UI.openElements([ 'menuOverlay', 'leftPanel' ]);
      instance.UI.enableFeatures([instance.Feature.Redaction]);

    });
  }, []);

  return (
    <div className="App">
      <div className="header">Document Viewer</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default App;
