// import { FieldProps, ErrorMessage } from 'formik';

// interface InputProps {
//   field: any;
//   form: any;
//   label?: string;
//   placeholder?: string;
//   type?: string;
//   autoComplete?: string;
//   children?: React.ReactNode;
// }

// export const Input = ({
//   field,
//   form: { touched, errors },
//   label,
//   ...props
// }: InputProps) => {
//   const hasError = touched[field.name] && errors[field.name];

//   return (
//     <div className="flex flex-col gap-1 w-full text-left">
//       {label && (
//         <label className="ml-4 text-sm text-muted font-medium">
//           {label}
//         </label>
//       )}
      
//       <div className="relative flex items-center">
//         <input
//           {...field}
//           {...props}
//           className={`input-primary ${
//             hasError
//               ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
//               : ''
//           } ${props.children ? 'pr-12' : ''}`}
//         />
        
//         {props.children && (
//           <div className="absolute right-4 flex items-center">
//             {props.children}
//           </div>
//         )}
//       </div>

//       <div className="min-h-[1.25rem] ml-4">
//         <ErrorMessage
//           name={field.name}
//           component="span"
//           className="text-xs text-red-500"
//         />
//       </div>
//     </div>
//   );
// };



// import { FieldProps, ErrorMessage } from 'formik';

// interface InputProps extends FieldProps {
//   label?: string;
//   placeholder?: string;
//   type?: string;
//   autoComplete?: string;
//   children?: React.ReactNode;
// }

// export const Input = ({
//   field,
//   form: { touched, errors },
//   label,
//   children,
//   ...props
// }: InputProps) => {
//   const hasError = touched[field.name] && errors[field.name];

//   return (
//     <div className="flex flex-col gap-1 w-full text-left">
//       {label && (
//         <label className="ml-5 text-sm text-muted font-medium">
//           {label}
//         </label>
//       )}
      
//       <div className="relative flex items-center">
//         <input
//           {...field}
//           {...props}
//           className={`
//             w-full px-5 py-3 outline-none transition-all duration-200
//             bg-surface border text-foreground placeholder:text-muted
//             rounded-full
//             focus:ring-4 focus:ring-primary/10
//             ${hasError
//               ? 'border-red-500 focus:border-red-500'
//               : 'border-border focus:border-primary'
//             }
//             ${children ? 'pr-12' : ''}
//           `}
//         />
        
//         {/* Контейнер для іконки (наприклад, ока для пароля) */}
//         {children && (
//           <div className="absolute right-4 flex items-center justify-center">
//             {children}
//           </div>
//         )}
//       </div>

//       {/* Контейнер для тексту помилки з фіксованою висотою, щоб верстка не "стрибала" */}
//       <div className="min-h-5 ml-5 mt-1">
//         <ErrorMessage
//           name={field.name}
//           component="span"
//           className="text-xs text-red-500 font-medium"
//         />
//       </div>
//     </div>
//   );
// };





import { FieldProps, ErrorMessage } from 'formik';

export const Input = ({ 
  field, 
  form: { touched, errors }, 
  children, // для кнопки Show/Hide
  ...props 
}: FieldProps & { label?: string; children?: React.ReactNode }) => {
  
  const hasError = touched[field.name] && errors[field.name];

  return (
    <div className="flex flex-col w-full">
      <div className="relative flex items-center">
        <input
          {...field}   // тут name, value, onChange, onBlur
          {...props}   // тут type, placeholder, autoComplete
          className={`
            w-full px-5 py-3 rounded-full border bg-white outline-none transition-all
            ${hasError 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-border focus:border-primary'
            } 
            text-foreground placeholder:text-muted
            ${children ? 'pr-14' : ''} 
          `}
        />
        {children && (
          <div className="absolute right-4">
            {children}
          </div>
        )}
      </div>
      
      {/* Місце під помилку (фіксована висота) */}
      <div className="min-h-4.5 ml-5 mt-1">
        <ErrorMessage 
          name={field.name} 
          component="span" 
          className="text-[10px] text-red-500 font-medium" 
        />
      </div>
    </div>
  );
};