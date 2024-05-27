import { fetchCardData } from '@/app/lib/data';
import {
  CardDescription,
  CardHeader,
  CardTitle,
  Card as ShadcnCard,
} from '@/components/ui/card';
import {
  BanknotesIcon,
  ClockIcon,
  InboxIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = await fetchCardData();

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="收集" value={totalPaidInvoices} type="collected" />
      <Card title="待定" value={totalPendingInvoices} type="pending" />
      <Card title="发票总数" value={numberOfInvoices} type="invoices" />
      <Card title="客户总数" value={numberOfCustomers} type="customers" />
    </>
  );
}

interface CardProps {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}
export function Card(props: CardProps) {
  const { title, value, type } = props;
  const Icon = iconMap[type];

  return (
    <ShadcnCard>
      <CardHeader className="transition duration-300 ease-out hover:scale-110">
        <CardDescription className="flex justify-between">
          {title}
          {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        </CardDescription>
        <CardTitle>
          <div className="text-2xl">{value}</div>
        </CardTitle>
      </CardHeader>
    </ShadcnCard>
  );
}
