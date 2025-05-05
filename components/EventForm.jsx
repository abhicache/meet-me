"use client";

import { eventSchema } from "@/app/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { createEvent } from "@/actions/event";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";

const EventForm = ({onSubmitForm}) => {
    const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      duration: 40,
      isPrivate: true,
    },
  });
    
    
    const { loading, error, fn: fnCreateEvent } = useFetch(createEvent);
    const onSubmit = async(data)=>{
        await fnCreateEvent(data);
        if (!loading && !error) {
            onSubmitForm();
        }
        router.refresh();
    }

  return (
    <form className="px-5 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Event Title
        </label>

        <Input id="title" {...register("title")} className="mt-1" />
        {errors.title && (
          <div className="text-red-500">{errors.title.message}</div>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Event Description
        </label>

        <Input id="description" {...register("description")} className="mt-1" />
        {errors.description && (
          <div className="text-red-500">{errors.description.message}</div>
        )}
      </div>

      <div>
        <label
          htmlFor="duration"
          className="block text-sm font-medium text-gray-700"
        >
          Duration (in minutes)
        </label>

        <Input
          id="duration"
          {...register("duration", {
            valueAsNumber: true,
          })}
          className="mt-1"
        />
        {errors.duration && (
          <div className="text-red-500">{errors.duration.message}</div>
        )}
      </div>

      <div>
        <label
          htmlFor="isPrivate"
          className="block text-sm font-medium text-gray-700"
        >
          Meeting Privacy
        </label>

        <Controller
          name="isPrivate"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value ? "true" : "false"}
              onValueChange={(value) => field.onChange(value === "true")}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select Privacy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Private</SelectItem>
                <SelectItem value="false">Public</SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        {errors.isPrivate && (
          <div className="text-red-500">{errors.isPrivate.message}</div>
        )}
      </div>

        {error && (
          <div className="text-red-500">{error.message}</div>
        )}
      <Button type="submit" className="mt-2" disabled={loading}>
        {loading ? "Creating..." : "Create Event"}
        
      </Button>
    </form>
  );
};

export default EventForm;
