import React, { useState } from 'react';

const Settings = () => {
  const initialSettings = [
    { id: 1, title: 'Account Settings', description: 'Manage your account details and preferences.' },
    { id: 2, title: 'Notification Settings', description: 'Customize your notification preferences.' },
    { id: 3, title: 'Privacy Settings', description: 'Control your privacy settings and data sharing.' },
    { id: 4, title: 'Language Settings', description: 'Set your preferred language.' },
    { id: 5, title: 'Security Settings', description: 'Manage your security options, including 2FA.' },
  ];

  const [settings, setSettings] = useState(initialSettings);
  const [editingSetting, setEditingSetting] = useState(null);

  const handleEditSetting = (id) => {
    const setting = settings.find((setting) => setting.id === id);
    setEditingSetting(setting);
  };

  const handleSaveEdit = () => {
    setSettings(settings.map((setting) => (setting.id === editingSetting.id ? editingSetting : setting)));
    setEditingSetting(null);
  };

  const handleCancelEdit = () => {
    setEditingSetting(null);
  };

  return (
    <>
      <header className="flex flex-col sm:flex-row items-center justify-between bg-white shadow p-4 rounded-lg mb-6">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-gray-700">Settings</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-200 p-2 rounded-lg">
            <i className="fas fa-search text-gray-600"></i>
          </button>
          <button className="bg-gray-200 p-2 rounded-lg">
            <i className="fas fa-bell text-gray-600"></i>
          </button>
          <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full" />
        </div>
      </header>

      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg mb-4">General Settings</h2>
        <div className="space-y-4">
          {settings.map((setting) => (
            <div key={setting.id} className="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <h3 className="font-bold">{setting.title}</h3>
                <p className="text-sm text-gray-600">{setting.description}</p>
              </div>
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded"
                onClick={() => handleEditSetting(setting.id)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </section>

      {editingSetting && (
        <section className="bg-white p-4 rounded-lg shadow mt-6">
          <h2 className="font-bold text-lg mb-4">Edit Setting</h2>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input
              type="text"
              placeholder="Title"
              className="p-2 border rounded"
              value={editingSetting.title}
              onChange={(e) => setEditingSetting({ ...editingSetting, title: e.target.value })}
            />
            <textarea
              placeholder="Description"
              className="p-2 border rounded"
              value={editingSetting.description}
              onChange={(e) => setEditingSetting({ ...editingSetting, description: e.target.value })}
            />
          </div>
          <button 
            className="bg-green-500 text-white py-2 px-4 rounded mr-2"
            onClick={handleSaveEdit}
          >
            Save
          </button>
          <button 
            className="bg-gray-500 text-white py-2 px-4 rounded"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        </section>
      )}
    </>
  );
};

export default Settings;
