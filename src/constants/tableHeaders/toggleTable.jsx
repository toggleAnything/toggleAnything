const toggleTable = [
  { id: 'icon', label: '', minWidth: 20 },
  { id: 'toggle', label: 'Toggle', minWidth: 170 },
  { id: 'state', label: 'State', minWidth: 100 },
  {
    id: 'createdDate',
    label: 'Created Date',
    minWidth: 170,
    format: (value) => value.toFixed(2),
  },
];

export default toggleTable;
