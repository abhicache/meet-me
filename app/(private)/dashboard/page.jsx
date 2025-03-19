"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/nextjs'
import { set, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usernameSchema } from '@/app/lib/validators';
import { useEffect } from 'react';
import useFetch from '@/hooks/use-fetch';
import { updateUsername } from '@/actions/users';
import { BarLoader } from 'react-spinners';


const Dashboard = () => {
  const { isLoaded, user} = useUser();
  const {register, handleSubmit, setValue, formState:{ errors }} = useForm({
    resolver: zodResolver(usernameSchema),
  });


  useEffect(() => {
    setValue('username', user?.username);
  }, [isLoaded]);

  const { loading,
     error,
     fn:fnUpdateUsername}= useFetch(updateUsername);

  const onSubmit = async (data) => {
    fnUpdateUsername(data.username);
  }

  console.log(user);
  return (
    <div className='space-y-4'>
      <Card> 
        <CardHeader>
          <CardTitle>Vanakam {user?.firstName} !</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Your Unique link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
            <div>
              <div className="flex items-center gap-1">
                <span>{window?.location.origin}/</span>
                <Input {...register("username")} placeholder="username"></Input>
              </div>
              {errors.username &&(
                <div className="text-red-500">{errors.username.message}</div>
              )}
              {error && <div className="text-red-500">{error.message}</div>}
            </div>
            {loading && (
              <BarLoader className="mb-3" width={"100%"} color="#ff4d4d" />
            )}
            <Button type="submit">Update Username</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
    
  
}

export default Dashboard;