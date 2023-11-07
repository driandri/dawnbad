import Loading from '@/widgets/layout/loading';
import { useState } from 'react';

const withLoading = (WrappedComponent) => {
   return (props) => {
      const [isLoading, setLoading] = useState(false);

      const showLoading = () => {
         setLoading(true);
      };

      const hideLoading = () => {
         setLoading(false);
      };

      return (
         <div>
            {isLoading && <Loading />}
            {!isLoading &&
               <WrappedComponent {...props} showLoading={showLoading} hideLoading={hideLoading} />
            }
         </div>
      );
   };
};

export default withLoading;