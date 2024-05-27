import { fetchLatestInvoices } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices(); // Fetch data inside the component
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        最新的发票
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="grid bg-white p-2">
          {latestInvoices.map((invoice, i) => {
            return (
              <ListItem
                key={invoice.id}
                invoice={invoice}
                className={clsx({ 'border-t': i !== 0 })}
              />
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-4">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">刚刚更新</h3>
        </div>
      </div>
    </div>
  );
}

function ListItem(params: {
  className?: string;
  invoice: Awaited<ReturnType<typeof fetchLatestInvoices>>[0];
}) {
  const { invoice } = params;

  return (
    <div
      className={clsx(
        'flex items-center gap-4 p-4 transition duration-200 ease-out hover:z-10 hover:scale-105 hover:shadow-[0_0px_12px_2px_rgba(0,0,0,0.05)]',
      )}
    >
      <Avatar className="hidden h-9 w-9 sm:flex">
        <AvatarImage
          src={invoice.image_url}
          alt={`${invoice.name}'s profile picture`}
        />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <p className="text-sm font-medium leading-none">{invoice.name}</p>
        <p className="text-sm text-muted-foreground">{invoice.email}</p>
      </div>
      <div className="ml-auto font-medium">{invoice.amount}</div>
    </div>
  );
}
