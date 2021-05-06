export const holdersData = {
    legend: {
      orient: 'vertical',
      left: 'right',
      data: ['0x001', '0x002', '0x003', '0x004', '0x005'
        ],
    },
    series: [
        {
        name: 'Share',
        type: 'pie',
        radius: '80%',
        center: ['50%', '50%'
            ],
        data: [
                {
            name: '0x001',
            value: 500
                },
                {
            name: '0x002',
            value: 300
                },
                {
            name: '0x003',
            value: 200
                },
                {
            name: '0x004',
            value: 100
                },
                {
            name: '0x005',
            value: 100
                }
            ]
        }
    ]
}
  