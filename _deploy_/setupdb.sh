#!/bin/bash

GitRepoRoot=$(pwd | sed -e 's/\(.*event360\).*/\1/')
echo $GitRepoRoot
SetupDbCommand="sudo -u postgres psql -f ${GitRepoRoot}/_deploy_/event360dbsetup.sql"

echo "List Existing Database"
echo '\list' | sudo -u postgres psql

echo "List Existing Users"
echo '\du' | sudo -u postgres psql

echo "Configure event360 Database"
echo "..."
echo ${SetupDbCommand}
${SetupDbCommand}

echo "Listing Updated Database"
echo '\list' | sudo -u postgres psql

echo "Listing Updated Users"
echo '\du' | sudo -u postgres psql



