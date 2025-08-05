import { PieChart, Pie, Cell } from 'recharts';



const Chart = () => {
    const COLORS = ['#f1cdab', '#696675', '#247976', '#83c8d8', '#f16b76'];
    const data = [
        { name: 'Apples', value: 400 },
        { name: 'Bananas', value: 300 },
        { name: 'Cherries', value: 300 },
        { name: 'Dates', value: 200 },
    ];

  return (
    <div>
        <div className="relative flex justify-center items-center w-fit rounded-full">
            <PieChart width={300} height={300}>
                <Pie
                data={data}
                cx="50%" cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                >
                {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className='border'/>
                ))}
                </Pie>
            </PieChart>
            <div className='absolute size-40 rounded-full bg-white z-10 flex flex-col gap-1.5 items-center justify-center'>
                <span className='text-2xl font-bold'>R470.20</span>
                <p className='text-gray-400 text-sm'>of R600 limit</p>
            </div>
            <div className='pieInnerRing absolute size-48 rounded-full'></div>
        </div>
    </div>
  );
};

export default Chart;
