import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../utils/constants';
import { useLatestAPI } from './useLatestAPI';

export function useProducts(props = {}) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const { id } = props;
  const [products, setProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  let url = '';
  if (id) {
    url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
      `[[:d = at(document.id, "${id}") ]]`,
    )}&lang=en-us&pageSize=12`;
  } else {
    url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
      '[[at(document.type, "product")]]',
    )}&lang=en-us&pageSize=12`;
  }

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setProducts({ data: {}, isLoading: true });

        const response = await fetch(url, {
          signal: controller.signal,
        });
        const data = await response.json();

        setProducts({ data, isLoading: false });
      } catch (err) {
        setProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return [products.data, products.isLoading];
}
