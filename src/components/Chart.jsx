import { PieChart, Pie, Cell } from 'recharts';
import { useAppContext } from '../context/context' 
import { CurrencyFormatter } from '../utils/CurrencyFormatter';

const Chart = () => {
    const { budgets, addedTransactions } = useAppContext()
    const limit = budgets.length > 0 ? budgets.reduce((acc, val) => acc + val.amount, 0) : 0;
    const total = addedTransactions.filter(trans => trans.amount[0] === "-").reduce((tot, val) => tot + Number(val.amount.slice(1)), 0)

  return (
    <div className=''>
        <div className="relative flex justify-center items-center w-fitrounded-full">
            <PieChart width={250} height={250}>
                <Pie
                    data={budgets}
                    cx="50%" cy="50%"
                    labelLine={false}
                    outerRadius={110}
                    fill="#8884d8"
                    dataKey="amount"
                >
                {budgets.map((budget, index) => (
                    <Cell key={`cell-${index}`} fill={budget.theme} className='border'/>
                ))}
                </Pie>
            </PieChart>
            <div className='absolute size-34 rounded-full bg-white z-10 flex flex-col gap-1.5 items-center justify-center'>
                <span className='font-bold'>{CurrencyFormatter(total)}</span>
                <p className='text-gray-400 text-[13px]'>of R{CurrencyFormatter(limit)} limit</p>
            </div>
            <div className='pieInnerRing absolute size-44 rounded-full'></div>
        </div>
    </div>
  );
};

export default Chart;
