import React, { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import axios from 'axios';
import CalendarIcon from '../../assets/icons/calendar.png';
import './Client.scss';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const Client = () => {
	const [open, setOpen] = useState(false);
	const [dateRange, setDateRange] = useState({
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection',
	});
	const [records, setRecords] = useState([]);

	const fetchRecord = async () => {
		let tempRange = dateRange;
		tempRange.startDate.setHours(0, 0, 0, 0);
		tempRange.startDate.setHours(0, 0, 0, 0);
		try {
			const response = await axios.post('/api/customer/search', {
				dateRange: { ...tempRange, endDate: addDays(tempRange.endDate, 1) },
			});
			setRecords(response.data);
		} catch (err) {}
	};

	useEffect(() => {
		fetchRecord();
	}, [dateRange]); //eslint-disable-line

	const handleSelectRange = (range) => {
		setDateRange(range.selection);
		setOpen(false);
	};

	const handleOpenRangePicker = () => {
		setOpen((prev) => !prev);
	};

	const formatDate = (date) => {
		return `${months[date?.getMonth()]} ${date?.getDate()}, ${date?.getFullYear()}`;
	};

	return (
		<div className='mx-auto px-4 md:px-8 font-[Poppins]'>
			<h2 className='overflow-hidden mt-12 mb-3 text-center text-5xl font-extrabold tracking-widest text-[#006534] whitespace-nowrap'>
				MICHAEL KORN
			</h2>
			<div className='relative flex mb-3'>
				<div
					onClick={handleOpenRangePicker}
					className='relative z-20 cursor-pointer flex items-center ml-auto shadow-md border p-1 pr-2'
				>
					<img src={CalendarIcon} alt='' className='w-8 h-8' />
					{formatDate(dateRange.startDate)} - {formatDate(dateRange.endDate)}
				</div>
				{open && (
					<>
						{' '}
						<DateRangePicker
							ranges={[dateRange]}
							onChange={handleSelectRange}
							rangeColors='#006534'
							color='#006534'
							className='absolute z-50 right-0 top-[48px] shadow-md border'
						/>
						<div className='fixed top-0 left-0 w-screen h-screen z-10' onClick={() => setOpen(false)} />
					</>
				)}
			</div>
			<div className='max-h-[calc(100vh-190px)] overflow-auto scroll'>
				<table className='customer shadow-sm min-w-full'>
					<thead className='sticky top-0 bg-[#006534] shadow-md text-white'>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Name</th>
							<th scope='col'>Email</th>
							<th scope='col'>Phone</th>
							<th scope='col'>Legal Business Name</th>
							<th scope='col'>Number of W-2 Employees</th>
							<th scope='col'>Industry</th>
							<th scope='col'>Created At</th>
						</tr>
					</thead>
					<tbody>
						{records ? (
							records.length === 0 ? (
								<tr className=''>
									<td colSpan='7'>
										<div className='flex items-center flex-col max-h-full justify-center p-4 h-96'>
											<svg width='80' height='80' viewBox='0 0 80 80'>
												<g fill='none' fillRule='evenodd'>
													<path d='M0 0h80v80H0z'></path>
													<g stroke='#CBCCCD' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
														<path d='M75 21.5V30M75 37v30.5a1.5 1.5 0 0 1-1.5 1.5h-67A1.5 1.5 0 0 1 5 67.5V41M5 36.264v-2.57M13 33h12M13 46h12M13 59h12'></path>
														<g>
															<path d='M34 33h12M34 46h12M34 59h12'></path>
														</g>
														<g>
															<path d='M55 33h12M55 46h12M55 59h12'></path>
														</g>
														<path
															fill='#CBCCCD'
															d='M6.5 12h67a1.5 1.5 0 0 1 1.5 1.5V22H5v-8.5A1.5 1.5 0 0 1 6.5 12z'
														></path>
													</g>
												</g>
											</svg>
											<p className='mt-6 mb-4 text-center'>No data to show with current filters</p>
										</div>
									</td>
								</tr>
							) : (
								records.map((item, index) => {
									return (
										<tr key={`record_${index}`} className='content'>
											<td>{index + 1}</td>
											<td>{`${item.firstName} ${item.lastName}`}</td>
											<td>{item.email}</td>
											<td>{item.phoneNumber}</td>
											<td>{item.legalBusinessName}</td>
											<td>{item.numberOfW2}</td>
											<td>{item.industry}</td>
											<td>{new Date(item.createdAt).toLocaleString()}</td>
										</tr>
									);
								})
							)
						) : (
							<></>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Client;
