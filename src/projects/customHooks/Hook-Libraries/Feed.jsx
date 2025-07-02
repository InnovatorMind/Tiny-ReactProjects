// Feed.jsx
import React, { useState, useCallback } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import styles from './Feed.module.css';

const fetchPage = async page => {
  await new Promise(r => setTimeout(r, 800));
  return Array.from({ length: 10 }, (_, i) => `Item ${(page - 1) * 10 + i + 1}`);
};

const Feed = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    setLoading(true);
    const newItems = await fetchPage(page);
    setItems(prev => [...prev, ...newItems]);
    setPage(prev => prev + 1);
    if (newItems.length === 0) setHasNextPage(false);
    setLoading(false);
  }, [page]);

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: false,
    rootMargin: '0px 0px 100px 0px'
  });

  return (
    <div className={styles.container}>
      {items.map((item, i) => (
        <div key={i} className={styles.item}>
          {item}
        </div>
      ))}

      {hasNextPage && (
        <div ref={sentryRef} className={styles.loading}>
          Loading more...
        </div>
      )}
      {!hasNextPage && <p className={styles.end}>No more items!</p>}
    </div>
  );
};

export default Feed;
