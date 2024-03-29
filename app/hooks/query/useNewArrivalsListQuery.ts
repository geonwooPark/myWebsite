import { useQuery } from '@tanstack/react-query'
import getData from '../../utils/getData'
import { PostingType } from '../../interfaces/interface'
import { homeKeys } from '@/constants/queryKey'

export default function useNewArrivalsQuery() {
  const { data: newArrivalsList, isPending } = useQuery({
    queryKey: homeKeys.newArrivals(),
    queryFn: () =>
      getData<PostingType[]>(
        `${process.env.NEXT_PUBLIC_FE_URL}/api/home/new-arrivals`,
      ),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    throwOnError: true,
  })

  return { newArrivalsList, isPending }
}
