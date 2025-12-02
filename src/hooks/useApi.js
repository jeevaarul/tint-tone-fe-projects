import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { addNotification } from '../store/slices/uiSlice';
import { handleApiError } from '../utils/api';

/**
 * Custom hook for API queries with error handling
 */
export const useApiQuery = (queryKey, queryFn, options = {}) => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey,
    queryFn,
    onError: (error) => {
      const message = handleApiError(error);
      dispatch(addNotification({
        type: 'error',
        message,
      }));
    },
    retry: (failureCount, error) => {
      // Don't retry on 4xx errors
      if (error.response?.status >= 400 && error.response?.status < 500) {
        return false;
      }
      return failureCount < 3;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options,
  });
};

/**
 * Custom hook for API mutations with error handling
 */
export const useApiMutation = (mutationFn, options = {}) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onError: (error) => {
      const message = handleApiError(error);
      dispatch(addNotification({
        type: 'error',
        message,
      }));
    },
    onSuccess: (data, variables, context) => {
      if (options.successMessage) {
        dispatch(addNotification({
          type: 'success',
          message: options.successMessage,
        }));
      }
      
      // Invalidate related queries
      if (options.invalidateQueries) {
        options.invalidateQueries.forEach(queryKey => {
          queryClient.invalidateQueries({ queryKey });
        });
      }
      
      options.onSuccess?.(data, variables, context);
    },
    ...options,
  });
};

/**
 * Custom hook for paginated API queries
 */
export const usePaginatedQuery = (
  queryKey,
  queryFn,
  { page = 1, limit = 10, ...options } = {}
) => {
  const paginatedQueryKey = [...queryKey, { page, limit }];
  
  return useApiQuery(paginatedQueryKey, () => queryFn({ page, limit }), {
    keepPreviousData: true,
    ...options,
  });
};