import React, { useState } from 'react';

const EventFormMobile = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDescription: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    maxParticipants: '',
    maxVolunteers: '',
    OrgCid: '',
    registrationFee: '',
    isTeamEvent: false,
    minTeamSize: '',
    maxTeamSize: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <div className="w-full bg-white">
      <div className="px-5 py-6">
        <h2 className="text-center text-2xl font-bold text-gray-900">Organize an Event</h2>
        <form onSubmit={submit} className="mt-6 grid gap-4">
          <input className="border-b border-gray-300 focus:border-emerald-500 outline-none py-3" type="text" name="eventName" placeholder="Event Name" value={formData.eventName} onChange={handleChange} required />
          <textarea className="border-b border-gray-300 focus:border-emerald-500 outline-none py-3" name="eventDescription" placeholder="Description" value={formData.eventDescription} onChange={handleChange} rows={3} required />
          <div className="grid grid-cols-2 gap-4">
            <input className="border-b border-gray-300 focus:border-emerald-500 outline-none py-3" type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
            <input className="border-b border-gray-300 focus:border-emerald-500 outline-none py-3" type="time" name="eventTime" value={formData.eventTime} onChange={handleChange} required />
          </div>
          <input className="border-b border-gray-300 focus:border-emerald-500 outline-none py-3" type="text" name="eventLocation" placeholder="Location" value={formData.eventLocation} onChange={handleChange} required />

          <label className="flex items-center gap-3 select-none">
            <input type="checkbox" name="isTeamEvent" checked={formData.isTeamEvent} onChange={handleChange} className="h-5 w-5 accent-emerald-500" />
            <span className="text-sm font-semibold">Team Event</span>
          </label>

          <input className="border-b border-gray-300 focus:border-emerald-500 outline-none py-3" type="number" name="maxParticipants" placeholder={formData.isTeamEvent ? 'Max Teams' : 'Max Participants'} value={formData.maxParticipants} onChange={handleChange} min="1" />

          {formData.isTeamEvent && (
            <div className="grid grid-cols-2 gap-4">
              <input className="border-b border-gray-300 focus:border-emerald-500 outline-none py-3" type="number" name="minTeamSize" placeholder="Min Team Size" value={formData.minTeamSize} onChange={handleChange} min="2" required />
              <input className="border-b border-gray-300 focus:border-emerald-500 outline-none py-3" type="number" name="maxTeamSize" placeholder="Max Team Size" value={formData.maxTeamSize} onChange={handleChange} min="2" required />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <input className="border-b border-gray-300 focus:border-emerald-500 outline-none py-3" type="number" name="maxVolunteers" placeholder="Max Volunteers" value={formData.maxVolunteers} onChange={handleChange} min="1" />
            <input className="border-b border-gray-300 focus:border-emerald-500 outline-none py-3" type="number" name="OrgCid" placeholder="Club ID" value={formData.OrgCid} onChange={handleChange} min="1" required />
          </div>

          <input className="border-b border-gray-300 focus:border-emerald-500 outline-none py-3" type="number" name="registrationFee" placeholder="Registration Fee" value={formData.registrationFee} onChange={handleChange} step="0.01" min="0" required />

          <div className="h-20" />
          <button className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-2.25rem)] bg-emerald-500 hover:bg-emerald-600 active:translate-y-0.5 text-white font-bold py-4 rounded-xl shadow-[0_6px_0_rgba(16,185,129,0.6)]">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventFormMobile;
