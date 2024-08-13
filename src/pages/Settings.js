import React from 'react';

const Settings = () => {
  const dummySettings = [
    { title: 'Account Settings', description: 'Manage your account details and preferences.' },
    { title: 'Notification Settings', description: 'Customize your notification preferences.' },
    { title: 'Privacy Settings', description: 'Control your privacy settings and data sharing.' },
    { title: 'Language Settings', description: 'Set your preferred language.' },
    { title: 'Security Settings', description: 'Manage your security options, including 2FA.' },
  ];

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
          {dummySettings.map((setting, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-bold">{setting.title}</h3>
              <p className="text-sm text-gray-600">{setting.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Settings;
