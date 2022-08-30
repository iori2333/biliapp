import React from 'react';
import PageBase from './PageBase';
import ViewBase from './ViewBase';

function SettingsPage() {
  return <PageBase content={<ViewBase>Settings</ViewBase>} />;
}

export default SettingsPage;
