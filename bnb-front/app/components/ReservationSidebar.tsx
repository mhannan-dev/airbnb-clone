"use client";
import React, { useState } from 'react';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import DatePicker from './forms/DatePicker';

interface DateRange {
    startDate: Date;
    endDate: Date;
    key: string;
}

const initialDateRange: DateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}

const ReservationSidebar: React.FC = () => {
    const [dateRange, setDateRange] = useState<DateRange>(initialDateRange);

    const _setDateRange = (selection: DateRange) => {
        const newStartDate = new Date(selection.startDate);
        const newEndDate = new Date(selection.endDate);

        if (newEndDate <= newStartDate) {
            newEndDate.setDate(newStartDate.getDate() + 1);
        }
        setDateRange({
            ...dateRange,
            startDate: newStartDate,
            endDate: newEndDate
        });
    }

    const handleSelect = (ranges: RangeKeyDict) => {
        _setDateRange(ranges.selection as DateRange);
    }

    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">$100 per night</h2>
            <DateRangePicker
                ranges={[dateRange]}
                onChange={handleSelect}
            />
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">Guests</label>
                <select className="w-full -ml-1 text-xm">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </div>
            <div
                className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl"
            >
                Book
            </div>
            <div className="mb-4 flex justify-between align-center">
                <p>$500 nights</p>
                <p>$300</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Djangobnb fee</p>
                <p>$120</p>
            </div>
            <hr />
            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>
                <p>$5000</p>
            </div>
        </aside>
    );
}

export default ReservationSidebar;
